// `joiningDate` && `validityDate` format "yyyy-mm-dd"

export function checkValidity(joiningDate, validityDate) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [year, month, day] = joiningDate.split("-");
    const [yyyy, mm, dd] = validityDate.split("-");
    const maxValid = new Date(yyyy, mm - 1, dd);
    const selected = new Date(year, month - 1, day);
    return maxValid >= selected && maxValid >= today;
  }