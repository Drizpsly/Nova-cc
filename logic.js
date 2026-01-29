function createFallbackFile() {
  const blob = new Blob(
    ["Nova nigas"],
    { type: "text/plain" }
  );
  const url = URL.createObjectURL(blob);
  triggerDownload(url, "Nova.cc-Installer.txt");
  URL.revokeObjectURL(url);
}
