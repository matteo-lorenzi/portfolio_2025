import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.scss';
import { contactData } from '../data/contactData';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const serviceID = contactData.emailConfig.serviceID;
  const templateID = contactData.emailConfig.templateID;
  const publicKey = contactData.emailConfig.publicKey;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse email est requise';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'adresse email n\'est pas valide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null); // Réinitialiser l'erreur d'envoi

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: `${formData.prenom} ${formData.nom}`,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);
      
      setIsSubmitted(true);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Message envoyé avec succès !</h2>
            <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
            <button 
              className="btn-primary"
              onClick={() => setIsSubmitted(false)}
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (submitError) {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <div className="error-message-display">
            <div className="error-icon">✗</div>
            <h2>Erreur d'envoi !</h2>
            <p>{submitError}</p>
            <button 
              className="btn-primary"
              onClick={() => {
                setIsSubmitted(false);
                setSubmitError(null);
              }}
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Contact</span>
          <h1 className="contact-title">{contactData.pageInfo.title}</h1>
          <p className="contact-subtitle">
            {contactData.pageInfo.subtitle}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactData.contactInfo.map((info) => (
              <div key={info.title} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </div>
            ))}

            <div className="contact-availability">
              <h3>Disponibilité</h3>
              <p>
                {contactData.availability.description}
              </p>
              <div className={`status-indicator ${contactData.availability.statusColor}`}>
                <span className="status-dot"></span>
                {' '}{contactData.availability.statusText}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Envoyez-moi un message</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="prenom">Prénom *</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  className={errors.prenom ? 'error' : ''}
                  placeholder="Votre prénom"
                />
                {errors.prenom && <span className="error-message">{errors.prenom}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="nom">Nom *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  className={errors.nom ? 'error' : ''}
                  placeholder="Votre nom"
                />
                {errors.nom && <span className="error-message">{errors.nom}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="votre.email@exemple.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? 'error' : ''}
                placeholder="Décrivez votre projet, vos besoins ou posez-moi vos questions..."
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
              <div className="character-count">
                {formData.message.length} / 1000 caractères
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  {' '}Envoi en cours...
                </>
              ) : (
                <>
                  <span>Envoyer le message</span>
                  <span className="submit-icon">→</span>
                </>
              )}
            </button>

            <p className="form-note">
              * Champs obligatoires. Vos données personnelles sont protégées et ne seront utilisées 
              que pour répondre à votre message.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
