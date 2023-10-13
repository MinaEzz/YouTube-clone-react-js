import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constants.js";
const Sidebar = () => {
  const activeCategoryName = "New";

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background: category.name === activeCategoryName && "#fc1503",
              color: "#fff",
            }}
            key={category.name}
          >
            <span
              style={{
                color:
                  category.name === activeCategoryName ? "#fff" : "#fc1503",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === activeCategoryName ? "1" : "0.8",
              }}
            >
              {" "}
              {category.name}{" "}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
