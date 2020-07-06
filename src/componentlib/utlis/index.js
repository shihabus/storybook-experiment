export const flexBoxUtil = (
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "stretch"
) => ({
  display: "flex",
  flexDirection: `${flexDirection}`,
  justifyContent: `${justifyContent}`,
  alignItems: `${alignItems}`
});

export const cursorUtil = (
  isDisabled = false,
  defaultCursor = "pointer",
  disabled = "not-allowed"
) => (isDisabled ? disabled : defaultCursor);

export const bgColorSetter = (
  isDisabled = false,
  activeColor = "#4a377b",
  inactiveColor = "#979797"
) => (isDisabled ? inactiveColor : activeColor);

export const formatButtonGroupOptions = arr =>
  arr && arr.length > 0 ? arr.map(value => ({ label: value })) : [];
