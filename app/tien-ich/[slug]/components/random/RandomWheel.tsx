"use client";
import { COLORS } from "@/app/tien-ich/useGameServices";
import Text from "@/components/Text";
import Textarea from "@/components/Textarea";
import { useEffect, useRef, useState } from "react";
import ModalResult from "./ModalResult";

export type Option = {
  id: number;
  text: string;
  color: string;
};

const RandomWheel = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const initialSpeedRef = useRef<number>(0);
  const finalRotationRef = useRef<number>(0);

  // Hàm lấy màu cho option mới
  const getNextColor = (index: number) => {
    // Nếu có ít màu hơn số lượng options, lặp lại từ đầu
    return COLORS[index % COLORS.length];
  };

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);

    // Tách các dòng và lọc bỏ dòng trống
    const lines = value.split("\n").filter((line) => line.trim() !== "");

    // Tạo options mới từ các dòng, mỗi option một màu khác nhau
    const newOptions = lines.map((text, index) => ({
      id: index + 1,
      text: text.trim(),
      color: getNextColor(index),
    }));

    setOptions(newOptions);
  };

  const handleKeepResult = () => {
    setShowResult(false);
    setSelectedOption(null);
  };

  const handleRemoveResult = () => {
    if (selectedOption) {
      const newOptions = options.filter((opt) => opt.id !== selectedOption.id);
      // Cập nhật lại màu cho tất cả các options sau khi xóa
      const updatedOptions = newOptions.map((opt, index) => ({
        ...opt,
        color: getNextColor(index),
      }));
      setOptions(updatedOptions);
    }
    setShowResult(false);
    setSelectedOption(null);
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed = timestamp - startTimeRef.current;
    const duration = 6000; // 6 giây

    // Easing function: nhanh dần rồi chậm lại
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);

    const currentRotation =
      initialSpeedRef.current +
      (finalRotationRef.current - initialSpeedRef.current) * easeOutQuart;
    setRotation(currentRotation);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Kết thúc animation
      const finalOption =
        options[
          options.length -
            1 -
            Math.floor(
              (finalRotationRef.current % 360) / (360 / options.length)
            )
        ];
      setSelectedOption(finalOption);
      setShowResult(true);
      setIsSpinning(false);
      startTimeRef.current = null;
    }
  };

  const handleSpin = () => {
    if (options.length < 2 || isSpinning)
      return alert("Vui lòng nhập ít nhất 2 option");

    setIsSpinning(true);
    setSelectedOption(null);
    setShowResult(false);

    // Random số vòng quay (3-5 vòng) + góc ngẫu nhiên
    const spins = 3 + Math.floor(Math.random() * 3);
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalRotation = spins * 360 + extraDegrees;

    // Lưu giá trị ban đầu và cuối cùng
    initialSpeedRef.current = rotation;
    finalRotationRef.current = rotation + totalRotation;

    // Bắt đầu animation
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
  };

  // Tạo conic gradient từ các màu của options
  const getConicGradient = () => {
    if (options.length === 0) return "";

    const segmentAngle = 360 / options.length;
    const gradientStops = options.map((option, index) => {
      const startAngle = index * segmentAngle;
      return `${option.color} ${startAngle}deg ${startAngle + segmentAngle}deg`;
    });

    return `conic-gradient(from 0deg, ${gradientStops.join(", ")})`;
  };

  // Cleanup animation khi component unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center lg:gap-12 gap-4 my-4">
      <div className="w-full max-w-md dark:bg-gray-800 rounded-lg p-4">
        <div className="flex gap-2 mb-4 flex-col">
          <Textarea
            value={textareaValue}
            onChange={handleTextareaChange}
            rows={10}
            placeholder="Nhập các option, mỗi option một dòng"
            className="w-full text-sm dark:text-gray-300 flex-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-2"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div
          className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] cursor-pointer"
          onClick={handleSpin}
        >
          <div
            ref={wheelRef}
            className={`absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-600 transition-transform duration-3000 ease-out`}
            style={{
              transform: `rotate(${rotation}deg)`,
              background: getConicGradient(),
            }}
          >
            {options.map((option, index) => {
              const angle = (360 / options.length) * index;
              const segmentAngle = 360 / options.length;
              const textAngle = angle + segmentAngle / 2; // Góc của đường phân giác

              return (
                <div
                  key={option.id}
                  className="absolute w-full h-full flex items-center justify-center"
                  style={{
                    transform: `rotate(${textAngle}deg)`,
                  }}
                >
                  <Text className="left-[45%] top-[5%] text-white font-bold text-sm whitespace-nowrap drop-shadow-md absolute text-center">
                    {option.text}
                  </Text>
                </div>
              );
            })}
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rotate-45"></div>
        </div>
        <Text>Click để quay</Text>
      </div>

      {showResult && selectedOption && (
        <ModalResult
          handleKeepResult={handleKeepResult}
          handleRemoveResult={handleRemoveResult}
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
};

export default RandomWheel;
