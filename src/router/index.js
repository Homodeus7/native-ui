import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index.vue';
import TheButton from '@/views/TheButton.vue';
import TheTypography from '@/views/TheTypography.vue';
import TheCheckbox from '@/views/TheCheckbox.vue';
import TheRadioButton from '@/views/TheRadioButton.vue';
import TheProgress from '@/views/TheProgress.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/button',
      name: 'button',
      component: TheButton,
    },
    {
      path: '/typography',
      name: 'typography',
      component: TheTypography,
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: TheCheckbox,
    },
    {
      path: '/radiobutton',
      name: 'radiobutton',
      component: TheRadioButton,
    },
    {
      path: '/progress',
      name: 'progress',
      component: TheProgress,
    },
  ],
});

export default router;
