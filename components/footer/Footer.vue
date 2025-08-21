<script setup lang="ts">
const payments: string[] = ['Mir', 'Visa', 'Mastercard', 'Sbp']
const socials: Socials[] = [
  {
    icon: 'Telegram',
    url: {
      path: '',
      title: 'Мы в «Telegram»!'
    }
  },
  {
    icon: 'Whatsapp',
    url: {
      path: '',
      title: 'Мы в «Whatsapp»!'
    }
  },
  {
    icon: 'Viber',
    url: {
      path: '',
      title: 'Мы в «Viber»!'
    }
  },
  {
    icon: 'Discord',
    url: {
      path: '',
      title: 'Мы в «Discord»!'
    }
  }
]
const footerMenu: Menu[] = [
  {
    caption: 'Политика конфиденциальности',
    url: {
      path: '',
      title: 'Перейти на страницу «Политика конфиденциальности»'
    }
  },
  {
    caption: 'Пользовательское соглашение',
    url: {
      path: '',
      title: 'Перейти на страницу «Пользовательское соглашение»'
    }
  },
  {
    caption: 'Правила возврата',
    url: {
      path: '',
      title: 'Перейти на страницу «Правила возврата»'
    }
  }
]
const menu: Menu[] = [
  {
    caption: 'Продукты',
    url: {
      path: '',
      title: 'Перейти на страницу «Продукты»'
    }
  }
]
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper u-container">
      <div class="footer__row footer__row--wrap">
        <NuxtLink href="/" class="footer__link" activeClass="footer__link--active">
          <IconLogo filled class="footer__logo" />
        </NuxtLink>

        <UiMenu class="footer__menu" :menu place="footer" uppercase />

        <FooterMenu :footerMenu />
      </div>

      <div class="footer__row">
        <UiPayments class="footer__payments" :payments />

        <p class="footer__copyright">
          <span>Разработано компанией «Рога и копыта<sup>&copy;</sup>»</span>
          <span>2024-2025 г.</span>
        </p>

        <UiSocials :socials />
      </div>
    </div>
  </footer>
</template>

<style scoped src="./styles/footer.css"></style>
