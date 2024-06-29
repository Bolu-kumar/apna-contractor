import React, { useState, useEffect } from "react";

const EmbedGoogleSheetForm = ({ reportType }) => {
  const [sheetUrl, setSheetUrl] = useState("");
  const [embeddedUrl, setEmbeddedUrl] = useState("");
  const [error, setError] = useState("");

  // Load saved sheetUrl from localStorage on component mount
  useEffect(() => {
    const savedUrl = localStorage.getItem(`${reportType}SheetUrl`);
    if (savedUrl) {
      setSheetUrl(savedUrl);
    }
  }, [reportType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can add more robust validation)
    if (!sheetUrl.trim()) {
      setError("Google Sheets URL cannot be empty");
      return;
    }

    // Validate if the URL is a valid Google Sheets embed URL
    if (!sheetUrl.includes("https://docs.google.com/spreadsheets/d/")) {
      setError("Invalid Google Sheets URL");
      return;
    }

    // Assuming the URL is valid, set the embedded URL
    setEmbeddedUrl(`${sheetUrl}/pubhtml?widget=true&amp;headers=false`);
    setError(""); // Clear any previous error

    // Save sheetUrl to localStorage
    localStorage.setItem(`${reportType}SheetUrl`, sheetUrl);
  };

  return (
    <div>
      <h2 className="text-black">Embed {reportType} Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sheetUrl">Google Sheets URL</label>
          <input
            type="text"
            className="form-control"
            id="sheetUrl"
            value={sheetUrl}
            onChange={(e) => setSheetUrl(e.target.value)}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Embed Sheet
        </button>
      </form>

      {embeddedUrl && (
        <div className="google-sheet-embed">
          <iframe
            title="Embedded Google Sheets Report"
            src={embeddedUrl}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default EmbedGoogleSheetForm;
