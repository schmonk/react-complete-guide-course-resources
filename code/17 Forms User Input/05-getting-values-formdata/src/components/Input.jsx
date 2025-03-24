export default function Input({ lablel, id, error, ...props }) {
  return (
    <div className='control no-margin'>
      <label htmlFor={id}>{lablel}</label>
      <input id={id} {...props} />
      <div className='control-error'>{error && <p>{error}</p>}</div>
    </div>
  );
}
