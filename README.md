# SurfaceAreaCalculator  
## Projekti seadistamine  
1. Lae projekt alla Githubist
2. Unzipi folder ja liigu PowerShellis projekti kausta
3. Kirjuta PowerShelli käsk: `npm install`
4. Kirjuta PowerShelli käsk: `react-native run-android`

### Juhend  
Rakenduse kalkulaator on tehtud [Youtubes oleva õpetuse järgi](https://www.youtube.com/watch?v=kye4zEwDxgU). Juhend on väga selge ja õpetlik, andis hea ettekujutuse React Nativest. Kõik peale tavalise kalkulaatori on tehtud ise: ekraanide vahel liikumine, kujundite kalkulaatorid, disain. Juhendina kasutasin Googlet ja Stack Overflowd.
### Juhendi muutused  
Ekraanide vahel liikumiseks kasutasin React Navigationi. Esialgu ei läinud see kõige paremini, kuna kõige uuem versioon oli minu projekti puhul vigane. Tööle saamiseks pidin sealt ühe mooduli uninstallima ja manuaalselt vanema versiooni installima. Seejärel töötas kõik probleemivabalt.  
Kujundite valimise ekraanil on tegemist flexboxiga, mis on jaotatud kolmeks. Igal sektsioonil on TouchableOpacity, millele on pandud pilt külge. Seega saab vajutada ka pildi kõrvale tühjale alale, mitte ei pea vajutama otseselt pildi peale.  
Kujundite pindala ja ümbermõõdu arvutamisel tuleb vastus koheselt, kui vajalikud sisendid on sisestatud.
## Demo
Rakenduse demo on vaadatav [Streamable keskkonnas](https://streamable.com/588on).