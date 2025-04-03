export const func = {
  numberWithDots: function numberWithDots(
    num: number | string,
    subFix?: string
  ) {
    if (!num) return 0;
    return `${Number(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${subFix ? ` ${subFix}` : ""}`;
  },

  defaultAvatar: (name?: any) => {
    return `https://ui-avatars.com/api/?name=${name}`;
  },

  avatar: (name?: any, url?: string) => {
    if (url) return url;
    return `https://ui-avatars.com/api/?name=${name}`;
  },

  checkNullish: (data?: any) => {
    if (!data || (typeof data == "string" && data == "") || data == undefined)
      return "";
    return data;
  },

  stringToNumber: (str: string) => {
    const regexNumber = /[0-9]/g;
    return Number(str.match(regexNumber)?.join("")) ?? 0;
  },

  onClickNewTab: (path: string) => {
    const win: any = window.open(path, "_blank");
    win.focus();
  },
  copyText: (text: string) => {
    navigator.clipboard.writeText(text);
    // message.success("Copy successfully!");
  },
  removeVietnameseDiacritics: (str: string) => {
    return str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },
  phoneWithDot: (str?: string) => {
    return str?.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3");
  },
  mapToEntity: (entity: any, body: any) => {
    return Object.assign(entity, body);
  },
  getStoreAliasFromHostname: () => {
    const { hostname } = window.location;

    return hostname.split(".")[0];
  },

  renderCode: () => {
    const numbers = "0123456789";
    const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(
        Math.random() * (numbers.length + text.length)
      );
      result +=
        randomIndex < numbers.length
          ? numbers[randomIndex]
          : text[randomIndex - numbers.length];
    }
    return result;
  },

  sortObj: <T>(arr: T[], key: string) => {
    return arr.sort((a: any, b: any) => a[key] - b[key]);
  },
  cloneDeep: <T>(obj: T): T => {
    const newObj = JSON.stringify(obj);
    return JSON.parse(newObj);
  },
  formatCurrency: (
    num: number,
    suffixes: string = "đ",
    positionSuffixes: string = "right",
    configNull?: {
      format?: string;
      toFixed?: number;
    }
  ) => {
    if (num) {
      const s = Number(num).toFixed(configNull?.toFixed);
      const regex = /\B(?=(\d{3})+(?!\d))/g;
      return positionSuffixes === "right"
        ? s.replace(regex, ",") + suffixes
        : suffixes + s.replace(regex, ",");
    }
    return !configNull ? 0 : configNull.format;
  },

  replaceNumberWithDot: (value: any) => {
    const v = value ? value : "0";
    return Number(v?.replace(/,/g, "").replace(/-/g, ""));
  },

  multiDecima: (num1: number, num2: number, toFixed?: number) => {
    const result = num1 * num2;
    const fixedResult = result.toFixed(toFixed ?? 2);
    return fixedResult;
  },

  mapOptionValue: <T>(arr: T[]) => {
    return arr?.map((item: any) => ({
      label: `${item.code} - ${item.name ?? "---"}`,
      value: item.code,
    }));
  },

  getRandomNumber: (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};
