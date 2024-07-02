/**
 * @param {(data: {}) => void} onSubmit
 */
const handleSubmit = (onSubmit) => {
  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  return (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, name) => (data[name] = value));
    event.currentTarget.reset();
    onSubmit(data, event);
  };
};

export default handleSubmit;
