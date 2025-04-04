import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";
import { Option } from "./RandomWheel";

type Props = {
  handleKeepResult: VoidFunction;
  handleRemoveResult: VoidFunction;
  selectedOption: Option;
};

const ModalResult = (props: Props) => {
  const { handleKeepResult, handleRemoveResult, selectedOption } = props;

  return (
    <div>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4">
          <div className="text-center mb-6">
            <Text className="text-2xl font-bold mb-2">Kết quả</Text>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: selectedOption.color }}
              ></div>
              <Text className="text-xl">{selectedOption.text}</Text>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleKeepResult} size="middle" type="primary">
              Giữ lại
            </Button>
            <Button onClick={handleRemoveResult} size="middle" type="outline">
              Xóa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ModalResult);
