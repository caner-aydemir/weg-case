

### Aşağıdaki linkten projeyi test edebilirsiniz.
[Proje Linki](caneraydemir.xyz)

### Hatırlatma 
GRAPHQ-FAKER API'sinden gelen dataların içinde çalışan fotoğrafları bozuk veya hatalı geliyor. Bu sebeple tüm çalışan fotoğraflarını tek bir image yaptım.
<br/>
Kullanıcı adı : admin , Şifre : admin123
## Özellikler
- Kullanılan Teknolojiler:
  - Next.js
  - Typescript
  - Docker
  - Next UI
  - Tailwind CSS
  - GraphQL (API dizaynı olarak)
  - Context Hooks (State Management)

- JWT ile Authentication
- Middleware kontrolleri
- Responsive tasarım ile mobil uyumluluk (isteğe bağlı olarak test edilebilir)

  
  
## Kullanım

1. **Projeyi Başlatma**

  Kullanıcı Adı : admin <br/> Şifre : admin123

2. Authenticasyon

Vercel API kullanılarak JWT tokenlı bir authentication yapılmıştır. Doğru giriş bilgileriyle dashboarda erişebilirsiniz.

3. Dashboard

GraphQL-Faker APIsinden getirilen sahte çalışan dataları görüntüleyebilirsiniz.
Her çalışan kartı yanında oy verme butonu bulunmaktadır. Çalışanların oyları azalan şekilde listelenir.
Her çalışan istenildiği kadar oy verebilir ve oy sırasına göre listelenir. Çalışan kartına basıldığınde çalışanın detay sayfasına gidebilirsiniz.


4. Çalışan Detayları
Next Router kullanılarak çalışanların kişisel sayfalarına gidilebilir ve detaylı bilgileri görüntülenebilir.


5. Güvenlik
Yazılan middleware ile güvenlik önlemleri alınmıştır. Tokenı olmayan kullanıcılar, Login hariç hiçbir sayfaya erişemezler.
