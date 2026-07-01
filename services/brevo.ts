import emailjs from '@emailjs/browser';

export interface SubscribeResult {
  success: boolean;
  message?: string;
}

export const subscribeToEbook = async (name: string, email: string): Promise<SubscribeResult> => {
  try {
    const result = await emailjs.send(
      'service_fwqrzkj', // Service ID (mesmo do formulário de contacto)
      'template_gxm24y6', // Template ID
      {
        name: name,
        email: email,
        subject: '🚨 [NOVO LEAD - EBOOK] ' + name,
        message: `Novo lead capturado na Landing Page do Ebook!\n\nDetalhes do Lead:\nNome: ${name}\nEmail: ${email}\nOrigem: Landing Page (Ebook Living Bone)\n\nPor favor, envie o Ebook para este contacto ou adicione-o à base de dados.`
      },
      'wvt7nn7qxi5mdWMyL' // Public Key
    );

    if (result.status === 200) {
      return { success: true };
    } else {
      console.error('EmailJS Error:', result.text);
      return { success: false, message: 'Ocorreu um erro ao enviar. Tente novamente.' };
    }
  } catch (error) {
    console.error('Error calling EmailJS:', error);
    return { success: false, message: 'Erro de rede. Verifique a sua ligação.' };
  }
};
