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
      <h1>sidebar</h1>
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
            <span> {category.icon} </span>
            <span> {category.name} </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
