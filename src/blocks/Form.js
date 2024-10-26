import React, {useEffect, useState} from 'react';
import Input from "../components/ui/Input";
import clsx from 'clsx';
import { botToken, chatId } from "../utils/telegramData";
import BtnContacts from "../components/ui/BtnContacts";
import { z } from 'zod';
import Button from "../components/ui/Button";

const Form = (props) => {
  const defaultData = {
    name: '',
    phone: '',
    note: ''
  };

  const [form, setForm] = useState({ ...defaultData });
  const [errors, setErrors] = useState({ ...defaultData });
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState('error');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setForm({ ...defaultData });
    setErrors({ ...defaultData });
  };

  const formSchema = z.object({
    name: z.string().nonempty('Name is required').regex(/^[a-zA-Zа-яА-Я\s]+$/, 'Invalid Name'),
    phone: z.string(),
    note: z.string(),
  });

  const validateForm = () => {
    try {
      formSchema.parse(form);
      setErrors({ ...defaultData });
      return true;
    } catch (err) {
      const newErrors = { ...defaultData };
      err.errors.forEach(e => {
        newErrors[e.path[0]] = e.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      validateForm();
    } else {
      setIsMounted(true);
    }
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const setError = () => {
      setStatusMessage('error');
      setIsShowMessage(true);
      setTimeout(() => {
        setIsShowMessage(false);
      }, 3000);
    };

    const setSuccess = () => {
      setStatusMessage('success');
      setIsShowMessage(true);
      setTimeout(() => {
        setIsShowMessage(false);
      }, 3000);
    };

    try {
      const message = `Name: ${form.name}\nNote: ${form.note}\nPhone: ${form.phone}\n`;
      const res = await fetch(`/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to: form.name, subject: "Форма письма", text: message })
      });

      if (res.status !== 200) {
        setError();
        return;
      }
      setSuccess();
      resetForm();
      window.location.href = '/thanks.html'
    } catch (err) {
      setError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={'form'} className={""}>
      <div className={' '}>
        <div className={"uppercase lg:mb-[30px] mb-[20px]"}>Write your question <br/>and we will contact you!</div>

        <form className={"max-w-[780px]"} onSubmit={handleSubmit}>
          <div className={"grid gap-[15px] mb-[10px]"}>
            <Input
              placeholder={'Your name'}
              value={form.name}
              onChange={handleInputChange}
              name={'name'}
              error={errors.name}
            />
            <Input
              placeholder={'Phone'}
              value={form.phone}
              mask={'+1 (999) 999-9999'}
              onChange={handleInputChange}
              name={'phone'}
              error={errors.phone}
            />
            <Input
              placeholder={'Add a note'}
              value={form.note}
              onChange={handleInputChange}
              name={'note'}
              error={errors.note}
            />
          </div>

          <Button label={loading ? 'Loading...' : 'Send'} color={"black"} className={"lg:mt-[40px] mt-[30px]"} disabled={loading}/>
        </form>
      </div>

      <div
        className={clsx('message fixed transition-all duration-500 top-[10px] text-white py-3 px-5 rounded-lg left-1/2 translate-x-[-50%]',
          {
            'translate-y-0': isShowMessage,
            "translate-y-[-200px]": !isShowMessage,
            'bg-green': statusMessage === 'success',
            'bg-red': statusMessage === 'error',
          })}
      >
        {statusMessage === 'success' ? 'Form was submitted' : 'Error sending form'}
      </div>
    </div>
  );
}

export default Form;
