export default class FeedbackForm {
  constructor(rootElement, openLink, siteContainer) {
    this.rootElement = rootElement;
    this.openLink = openLink;
    this.siteContainer = siteContainer;
    this.emptyFieldText = 'Поле обязательное для заполнения';
    this.nameError = false;
    this.telError = false;
    this.emailError = false;

    this.onError = this.onError.bind(this);
    this.onReset = this.onReset.bind(this);

    this.render();
  }

  render() {
    this.form = this.rootElement.querySelector('.form');
    this.name = this.form.querySelector('.form__name');
    this.tel = this.form.querySelector('.form__tel');
    this.email = this.form.querySelector('.form__email');
    this.comment = this.form.querySelector('.form__comment');
    this.closeBtn = this.form.querySelector('.form__close-btn');

    this.openLink.addEventListener('click', () => {
      this.siteContainer.classList.add('grid-container_hidden');
      this.rootElement.classList.add('grid-item-7_shown');
    });

    this.closeBtn.addEventListener('click', () => {
      this.onReset();
      this.siteContainer.classList.remove('grid-container_hidden');
      this.rootElement.classList.remove('grid-item-7_shown');
    });

    this.form.addEventListener('submit', (e) => this.onSubmit(e));
    this.name.addEventListener('focus', ({ target }) => {
      if (this.nameError) {
        this.onInputFocus(target);
        this.nameError = false;
      }
    });

    this.tel.addEventListener('focus', ({ target }) => {
      if (this.telError) {
        this.onInputFocus(target);
        this.telError = false;
      }
    });

    this.email.addEventListener('focus', ({ target }) => {
      if (this.emailError) {
        this.onInputFocus(target);
        this.emailError = false;
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.name.value === '') {
      this.nameError = true;
      this.onError(this.name, this.emptyFieldText);

    } else {
      const regExp = /(^[a-z'-]+([\ a-z'-])*$)|(^[а-яєіїґ'-]+([\ а-яєіїґ'-])*$)/i;
      if (!regExp.test(this.name.value)) {
        this.onError(this.name, 'Имя введено не корректно!');
        this.name.blur();
        this.nameError = true;
      } else {
        this.nameError = this.name.value === this.emptyFieldText;
      }
    }

    if (this.tel.value === '') {
      this.telError = true;
      this.onError(this.tel, this.emptyFieldText);

    } else {
      const regExp = /(^(\+|)[0-9]{11,}$)|(^(\+|)[0-9]{1,2}\([0-9]{3}\)(\-|\ |)[0-9]{3}(\-|)[0-9]{2}(\-|)[0-9]{2}$)/g;
      if (!regExp.test(this.tel.value) && this.tel.value !== this.emptyFieldText) {
        this.onError(this.tel, 'Формат номера введен не корректно!');
        this.tel.blur();
        this.telError = true;
      } else {
        this.telError = this.tel.value === this.emptyFieldText;
      }
    }

    if (this.email.value === '') {
      this.emailError = true;
      this.onError(this.email, this.emptyFieldText);

    } else {
      const regExp = /[-.\w]+@([\w-]+\.)+[\w-]/gi;
      if (!regExp.test(this.email.value) && this.email.value !== this.emptyFieldText) {
        this.onError(this.email, 'Введите корректный email!');
        this.email.blur();
        this.emailError = true;
      } else {
        this.emailError = this.email.value === this.emptyFieldText;
      }
    }

    if (!this.nameError && !this.telError && !this.emailError) {
      console.log('Form submited!');
      console.log(`Name: ${this.name.value}`);
      console.log(`Tel: ${this.tel.value}`);
      console.log(`Email: ${this.email.value}`);
      console.log(`Comment: ${this.comment.value}`);
      this.onReset();
    }
  }

  onError(element, errorMessage) {
    element.classList.add(`form__${element.name}_empty`);
    element.value = errorMessage;
  }

  onInputFocus(target) {
    target.classList.remove(`form__${target.name}_empty`);
    target.value = '';
  }

  onReset() {
    const fields = [this.name, this.tel, this.email, this.comment];

    for (let item of fields) {
      const { name } = item;
      if (name !== 'comment') {
        item.classList.remove(`form__${name}_empty`);
      }

      item.value = '';
    }
  }
}
