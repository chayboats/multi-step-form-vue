export default {
  name: { id: 'name', type: 'text', placeholder: 'e.g. Stephen King' },
  email: { id: 'email', type: 'email', placeholder: 'e.g. stephenking@lorem.com' },
  phone: { id: 'phone', type: 'tel', placeholder: 'e.g. 1234567890', maxlength: '10', pattern: '\\d{10}', title: '1234567890' },
};
