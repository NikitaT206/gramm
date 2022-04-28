import './PopupWithForm.css'

export function PopupWithForm(props: {title: string, children?: any, onSubmit: any, onCancel: any}) {

  function onSubmit(event: any) {
    event.preventDefault()
    props.onSubmit()
  }

  return (
    <div className='popup'>
      <form className='popup__form' onSubmit={onSubmit}>

        <div className='popup__heading'>
          <button className='popup__button popup__button_type_cancel' onClick={props.onCancel} type={'button'}></button>
          <h2 className='popup__title'>{props.title}</h2>
          <button className='popup__button popup__button_type_check' type={'submit'}></button>
        </div>

        <div className='popup__inputs'>
        {props.children}
            
        </div>
      </form>
    </div>
  )
}