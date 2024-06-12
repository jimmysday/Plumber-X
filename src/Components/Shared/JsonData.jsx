/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Input, Textarea } from "react-daisyui";

const JsonData = () => {
  const [jsonData, setJsonData] = useState("");
  const [property, setProperty] = useState("");
  const [propertyValue, setPropertyValue] = useState({});

  const resolvePath = (object, path, defaultValue) =>
    path
      .split(/[\.\[\]\'\"]/)
      .filter((p) => p)
      .reduce((o, p) => (o ? o[p] : defaultValue), object);

  const handleJsonInputChange = (event) => {
    const formattedJson = formatJson(event.target.value);
    setJsonData(formattedJson);
    handleDestructure(property, formattedJson);
  };

  const handlePropertyChange = (event) => {
    const newProperty = event.target.value;
    setProperty(newProperty);
    handleDestructure(newProperty, jsonData);
  };

  const handleDestructure = (propertyToExtract, jsonData) => {
    try {
      const parsedData = JSON.parse(jsonData);
      const value = resolvePath(parsedData, propertyToExtract);
      setPropertyValue(value);
    } catch (error) {
      setPropertyValue(undefined);
    }
  };

  const renderPropertyValue = (value) => {
    if (typeof value === "object") {
      return Object.entries(value).map(([key, val]) => (
        <div key={key} className="property-value">
          <p key={key}>{`${key}: ${val}`}</p>
          <hr />
        </div>
      ));
    } else {
      return value;
    }
  };

  const formatJson = (jsonString) => {
    try {
      const parsedData = JSON.parse(jsonString);
      return JSON.stringify(parsedData, null, 2);
    } catch (error) {
      return jsonString;
    }
  };

  return (
    <div className=" mx-10 my-32">
      <h1 className="text-2xl font-bold mb-4">
        JSON Object Property Extraction
      </h1>
      <div className="flex mb-4">
        <Textarea
          className="w-full "
          placeholder="Paste a JSON object"
          rows={10}
          value={jsonData}
          onChange={handleJsonInputChange}
        />
      </div>
      <div className="mb-4 w-full">
        <Input
          type="text"
          className="flex-1 w-full "
          placeholder="Enter object property"
          value={property}
          onChange={handlePropertyChange}
        />
      </div>
      <div className="mb-4 dark:border border  bg-white  text-green-700 light:bg-white px-3 ">
        {propertyValue && typeof propertyValue === "object" ? (
          renderPropertyValue(propertyValue)
        ) : (
          <p className="py-1">
            <span className="text-black">Property Value:</span>{" "}
            {propertyValue || (
              <span className="font-bold bg-white px-3 py-1 text-rose-700">
                Oops, something is wrong. Please try again.
              </span>
            )}
          </p>
        )}
      </div>
      <div className="stats shadow flex justify-center ">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default JsonData;
