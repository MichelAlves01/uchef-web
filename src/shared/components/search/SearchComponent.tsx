import { InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";

export interface SearchComponentProps {
  onInputChange: (text: string) => void;
}

function SearchComponent({ onInputChange }: Readonly<SearchComponentProps>) {
  const [value, setValue] = useState("");

  const Search = useMemo(
    () =>
      styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "",
        },
      })),
    []
  );

  const SearchIconWrapper = useMemo(
    () =>
      styled("div")(({ theme }) => ({
        color: "gray",
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })),
    []
  );

  const StyledInputBase = useMemo(
    () =>
      styled(InputBase)(({ theme }) => ({
        width: "100%",
        "& .MuiInputBase-input": {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create("width"),
          [theme.breakpoints.up("sm")]: {
            width: "16ch",
            "&:focus": {
              width: "100%",
            },
          },
        },
      })),
    []
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        id="search-field"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onInputChange(e.target.value);
        }}
      />
    </Search>
  );
}

export default SearchComponent;
