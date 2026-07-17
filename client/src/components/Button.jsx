function Button({ text, disabled }) {
  return (
    <button
      type="submit"
      className="btn"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;