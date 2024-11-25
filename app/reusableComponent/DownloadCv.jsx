"use client"; // Ensure this is a client component if using hooks
const DownloadButton = () => {
  const handleDownload = () => {
    //drive.google.com/file/d/11H3kXYg-ygwTZHAXwuSz2c_lpez5R2Ob/view?usp=sharing
    window.open(
      "https://drive.google.com/uc?export=download&id=11H3kXYg-ygwTZHAXwuSz2c_lpez5R2Ob",
      "_blank"
    ); // Adjust the path as needed
    // Create an anchor element and trigger a download
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-theme py-2 px-4 rounded-md text-white"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
