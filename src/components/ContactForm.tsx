import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import WoodenLabelCTA from './WoodenLabelCTA';
// siteData removed

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '盆栽について',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', type: '盆栽について', message: '' });
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage}>
        <h3>お問い合わせを受け付けました</h3>
        <p>内容を確認の上、担当者よりご連絡いたします。</p>
        <button className={styles.resetButton} onClick={() => setIsSubmitted(false)}>
          戻る
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">お名前 <span className={styles.required}>必須</span></label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="email">メールアドレス <span className={styles.required}>必須</span></label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="type">お問い合わせ種別</label>
        <select 
          id="type" 
          name="type" 
          value={formData.type}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="盆栽について">盆栽について</option>
          <option value="育て方について">育て方について</option>
          <option value="盆栽体験について">盆栽体験について</option>
          <option value="取材・掲載について">取材・掲載について</option>
          <option value="その他">その他</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="message">メッセージ <span className={styles.required}>必須</span></label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        ></textarea>
      </div>

      <div className={styles.privacyNote}>
        <p>送信することで、<a href="/privacy">プライバシーポリシー</a>に同意したものとみなされます。</p>
      </div>

      <div className={styles.submitArea}>
        <WoodenLabelCTA text="送信する" type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
