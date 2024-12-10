import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "About Us": "About us",
      "About Us p": "Welcome to Fakestore, your go-to destination for high-quality, affordable products. Our mission is simple: to provide a seamless, enjoyable shopping experience for everyone. We believe that online shopping should be convenient, trustworthy, and accessible—and that’s exactly what we deliver.",
      
      "Our Story": "Our Story",
      "Our Story p": "Fakestore was founded by Bereza Vladyslav, a passionate entrepreneur with a vision to transform the way people shop online. Recognizing the need for a platform that combines value and variety, Vladyslav set out to create a store where customers can find everything they need in one place. Today, Fakestore stands as a testament to his dedication to quality, innovation, and customer satisfaction.",
      
      "What We Offer" : "What We Offer",
      "What We Offer p" : "At Fakestore, we offer a wide range of products designed to meet your every need. From electronics to fashion, home goods to personal care, we handpick our inventory to ensure you get the best at unbeatable prices. With a commitment to excellence, we’re constantly updating our catalog to bring you the latest trends and top-rated items.",
      
      "Why Choose Us?" : "Why Choose Us?",
      "Why Choose Us? ul 1": "Quality Products: We prioritize quality, ensuring every item meets our high standards.",
      "Why Choose Us? ul 2": "Affordable Prices: Enjoy competitive pricing without compromising on quality.",
      "Why Choose Us? ul 3": "Easy Shopping: Our user-friendly website makes browsing, selecting, and purchasing products a breeze.",
      "Why Choose Us? ul 4": "Customer First: Your satisfaction is our top priority. Our support team is always here to help.",

      "Join Our Community": "Join Our Community",
      "Join Our Community p 1" : "We’re more than just a store—we’re a community of shoppers who value convenience, quality, and affordability. Whether you’re here for a specific item or just browsing, we’re glad to have you with us. Explore our collection today and discover why so many people choose Fakestore for their shopping needs.",
      "Join Our Community p 2": "Thank you for choosing Fakestore. We’re excited to serve you!",


      "Fake store p 1" : "This online store embodies style, warmth, and modern simplicity. Its design combines accessibility with a cozy atmosphere: from the vibrant yellow logo to the user-friendly interface, every detail is crafted to create a welcoming and enjoyable shopping experience.",
      "Fake store p 2" : "Key Features of the Store:",
      
      "Fake store ul 1" : "Product Range: A diverse selection of items, from trendy accessories and home goods to fashion and lifestyle essentials, tailored to appeal to a broad audience.",  
      "Fake store ul 2" : "Customer Experience: A streamlined, intuitive browsing experience that allows customers to find exactly what they’re looking for quickly. The warm color palette and clear, minimalist design make shopping easy and pleasant.",  
      "Fake store ul 3" : "Brand Aesthetic: The yellow and brown color scheme reflects a balance of energy and earthiness, making the store feel both vibrant and grounded, appealing to customers looking for both style andcomfort.",  
      "Fake store ul 4" : "Target Audience: The store caters to individuals who appreciate style and functionality, offering products that are both practical and aesthetically pleasing, ideal for modern lifestyles.",  
    
      "Fake store p 3" : "With a touch of personality and a commitment to quality, this online store is designed to be a go-to destination for those looking to add a little charm and convenience to their daily lives.",
    

      "Sidebar Nav" : "Navigation",
      "Sidebar Home" : "Home",
      "Sidebar Cart" : "Cart",
      "Sidebar Products" : "Products",
      "Sidebar Users" : "Users",
      "Sidebar Spin" : "Spin the wheel!",
      "Sidebar About" : "About Us",
      "Sidebar sign out" : "Sing out",
      "Sidebar log in" : "Log in",


      "Cart" : "Cart",
      "Cart empty" : "No products in the cart",

      
      "Products" : "Products",
      "Delete" : "Delete",
      "More" : "More",
      "Add to cart" : "Add to cart",
    }
  },
  uk: {
    translation: {
      "About Us": "Про нас",
      "About Us p": "Ласкаво просимо до Fakestore, вашого найкращого вибору для якісних і доступних товарів. Наша місія проста: забезпечити бездоганний і приємний досвід покупок для кожного. Ми віримо, що онлайн-шопінг має бути зручним, надійним і доступним — і саме це ми вам пропонуємо.",
      
      "Our Story": "Наша історія",
      "Our Story p": "Fakestore було засновано Владиславом Березою, пристрасним підприємцем із баченням змінити спосіб, у який люди здійснюють покупки онлайн. Усвідомлюючи потребу в платформі, яка поєднує цінність і різноманітність, Владислав вирішив створити магазин, де клієнти можуть знайти все необхідне в одному місці. Сьогодні Fakestore є свідченням його відданості якості, інноваціям та задоволенню потреб клієнтів.У Fakestore ми пропонуємо широкий асортимент товарів, які відповідають вашим потребам. Від електроніки до моди, від товарів для дому до засобів особистої гігієни — ми ретельно відбираємо асортимент, щоб ви отримували найкраще за неперевершеними цінами. Ми постійно оновлюємо наш каталог, щоб представити вам останні тренди та найкращі товари.",
      
      "What We Offer": "Що Ми Пропонуємо",
      "What We Offer p" : "У Fakestore ми пропонуємо широкий асортимент товарів, створених для задоволення всіх ваших потреб. Від електроніки до моди, товарів для дому та засобів особистої гігієни — ми ретельно відбираємо наш асортимент, щоб ви отримували найкраще за неперевершеними цінами. Завдяки відданості якості ми постійно оновлюємо наш каталог, щоб представити вам останні тренди та найкращі товари.",
      
      "Why Choose Us?" : "Чому саме ми?",
      "Why Choose Us? ul 1": "Якісні Товари: Ми ставимо якість на перше місце, забезпечуючи відповідність кожного товару нашим високим стандартам.",
      "Why Choose Us? ul 2": "Доступні Ціни: Насолоджуйтесь конкурентоспроможними цінами, не жертвуючи якістю.",
      "Why Choose Us? ul 3": "Легкий Шопінг: Наш зручний вебсайт робить перегляд, вибір і покупку товарів простими та приємними.",
      "Why Choose Us? ul 4": "Клієнт Перш за Все: Ваше задоволення — наш пріоритет. Наша команда підтримки завжди готова вам допомогти.",

      "Join Our Community": "Приєднуйтесь до нас",
      "Join Our Community p 1" : "Ми більше, ніж просто магазин — ми спільнота покупців, які цінують зручність, якість і доступність. Чи ви тут за конкретним товаром, чи просто переглядаєте, нам приємно мати вас серед наших клієнтів. Ознайомтесь з нашою колекцією сьогодні і дізнайтесь, чому так багато людей обирають Fakestore для своїх покупок.",
      "Join Our Community p 2": "Дякуємо, що обрали Fakestore. Ми раді служити вам!",


      "Fake store p 1" : "Цей онлайн-магазин втілює стиль, теплоту та сучасну простоту. Його дизайн поєднує доступність з затишною атмосферою: від яскравого жовтого логотипу до зручного інтерфейсу — кожна деталь створена для того, щоб забезпечити привітний і приємний досвід покупок.",
      "Fake store p 2" : "Ключові Особливості Магазину:",
      
      "Fake store ul 1" : "Асортимент Товарів: Різноманітний вибір товарів, від модних аксесуарів і товарів для дому до одягу та необхідних речей для повсякденного життя, що відповідає смакам широкої аудиторії.",  
      "Fake store ul 2" : "Досвід Клієнтів: Спрощений, інтуїтивно зрозумілий процес перегляду, який дозволяє покупцям швидко знайти те, що вони шукають. Тепла кольорова палітра та чіткий, мінімалістичний дизайн роблять покупки легкими та приємними.",  
      "Fake store ul 3" : "Естетика Бренду: Жовта та коричнева кольорова гамма відображає баланс енергії та природності, створюючи відчуття яскравості та стабільності, що приваблює клієнтів, які шукають як стиль, так і комфорт.",  
      "Fake store ul 4" : "Цільова Аудиторія: Магазин орієнтований на людей, які цінують стиль і функціональність, пропонуючи продукцію, яка є як практичною, так і естетично привабливою, ідеально підходить для сучасного способу життя.",  
      
      "Fake store p 3" : "З ноткою індивідуальності та відданістю якості, цей онлайн-магазин створений, щоб стати улюбленим місцем для тих, хто прагне додати трохи шарму та зручності у своє повсякденне життя.",
    

      "Sidebar Nav" : "Навігація по сайту",
      "Sidebar Home" : "Головна",
      "Sidebar Cart" : "Кошик",
      "Sidebar Products" : "Товари",
      "Sidebar Users" : "Користувачі",
      "Sidebar Spin" : "Покрути колесо!",
      "Sidebar About" : "Про Нас",
      "Sidebar sign out" : "Вийти",
      "Sidebar log in" : "Увійти",


      "Cart" : "Кошик",
      "Cart empty" : "Кошик пустує",


      "Products" : "Товари",
      "Delete" : "Видалити",
      "More" : "Більше",
      "Add to cart" : "Додати в кошик",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;