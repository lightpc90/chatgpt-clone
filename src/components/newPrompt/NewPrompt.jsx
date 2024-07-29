import './newPrompt.css'

const NewPrompt = () => {
  return (
    <>
    <div className='endChat'></div>
      <form className='newForm'>
        <label htmlFor="file">
            <img src='/attachment.png' alt='attachment' />
        </label>
        <input id='file' type="file" multiple={false} hidden />
        <input type='text' placeholder='Ask me anything...'/>
        <button>
            <img src='/arrow.png' alt='arrow image'/>
        </button>
      </form>
    </>
  );
}

export default NewPrompt