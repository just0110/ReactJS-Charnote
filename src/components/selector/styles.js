import styled from "styled-components";

export const SelectWrapper = styled.div`
  margin-top: ${({ label }) => (label ? "20px" : "10px")};
  &:first-child {
    margin-top: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: none;
`;

export const LabelWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.14;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:after {
    content: "*";
    margin-left: 2px;
    display: ${({ required }) => (required ? "block" : "none")};
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const customStyles = {
  container: base => ({
    ...base
  }),
  control: (base, { theme }) => ({
    ...base,
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      border: `1px solid ${theme.colors.gray}`
    },
    flexWrap: "nowrap"
  }),
  dropdownIndicator: (
    base,
    { theme, selectProps: { menuPlacement }, isDisabled }
  ) => ({
    ...base,
    color: isDisabled ? theme.colors.gray : theme.colors.gray,
  }),
  input: (base, { theme, isDisabled }) => ({
    ...base,
    fontSize: theme.fontSizes.sm,
    color: isDisabled ? theme.colors.gray : theme.colors.gray
  }),
  placeholder: (base, { theme }) => ({
    ...base,
    color: theme.colors.gray
  }),
  valueContainer: (base, { selectProps: { width }, theme, isDisabled }) => ({
    ...base,
    width: `${width * 12}px` || "100%",
    fontSize: theme.fontSizes.sm,
    color: isDisabled ? theme.colors.gray : theme.colors.gray
  }),
  menu: (_, { theme }) => ({
    position: "absolute",
    left: 0,
    zIndex: 1,
    margin: 0,
    borderRadius: "4px",
    boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.15)",
    border: `1px solid ${theme.colors.gray}`,
    backgroundColor: theme.colors.white,
    minWidth: "100%",
    width: "auto",
    maxHeight: "200px",
    overflow: "hidden"
  }),
  menuList: base => ({
    ...base,
    maxHeight: "200px"
  }),
  option: (base, { theme, isFocused, isSelected }) => ({
    ...base,
    minHeight: "30px",
    fontSize: theme.fontSizes.sm,
    cursor: "pointer",
    whiteSpace: "nowrap",
    backgroundColor: isFocused ? theme.colors.gray : "transparent",
    color: isSelected ? theme.colors.main : theme.colors.gray
  }),
  indicatorSeparator: () => ({})
};
