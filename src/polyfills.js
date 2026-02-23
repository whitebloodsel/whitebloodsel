if (typeof window !== "undefined" && !URL.parse) {
  URL.parse = (url, base) => {
    try {
      return new URL(url, base);
    } catch {
      return null;
    }
  };
}