var positionY = window.innerHeight;
var width = window.innerWidth;
console.log(width, positionY);
var indicator = document.getElementById("indicator");
var list = document.getElementsByClassName("nav-list");
var navbar = document.getElementById("navbar");
var sysDate = new Date();
var t = new Date(Date.UTC(sysDate.getFullYear(), sysDate.getMonth(), sysDate.getDate(),  sysDate.getHours(), sysDate.getMinutes(), 0));
var today = new Date().toISOString().substring(0,10);
var dates = document.getElementsByClassName("date");
var times = document.getElementsByClassName("time");
const url_contact = "https://slglqz.deta.dev/contact"
const url_trip = "https://slglqz.deta.dev/trip"
const xhr = new XMLHttpRequest();


var cities = ['Abiramam', 'Achampudur', 'Acharapakkam', 'Achipatti', 'Adaikkakuzhi', 'Adikaratti', 'Adiramapattinam', 'Adiyanuthu', 'Aduthurai', 'Agaram', 'Agastheeswaram', 'Alagappapuram', 'Alamathi', 'Alamelumangapuram', 'Alampalayam', 'Alandur', 'Alanganallur', 'Alangayam', 'Alangudi', 'Alangulam', 'Alangulam', 'Alanthurai', 'Alapakkam', 'Allapuram', 'Alur', 'Alwarkurichi', 'Alwarthirunagiri', 'Amathur', 'Ambasamudram', 'Ambattur', 'Ambur', 'Ammainaickanur', 'Ammanur', 'Ammapattinam', 'Ammapettai', 'Ammapettai', 'Ammavarikuppam', 'Ammoor', 'Anaimalai', 'Anaiyur', 'Anaiyur', 'Anakaputhur', 'Ananthapuram', 'Andankoil East', 'Andipalayam', 'Andipatti Jakkampatti', 'Anjugrammam', 'Annalagraharam', 'Annamalai Nagar', 'Annavasal', 'Annur', 'Anthiyur', 'Anuppankulam', 'Appakudal', 'Arachalur', 'Arakandanallur', 'Arakonam', 'Aralvaimozhi', 'Arani', 'Arani', 'Aranthangi', 'Arasiramani', 'Arasur', 'Aravakurichi', 'Aravankad', 'Arcot', 'Arimalam', 'Ariyalur', 'Ariyappampalayam', 'Ariyur', 'Arumanai', 'Arumbanur', 'Arumbavur', 'Arumuganeri', 'Aruppukkottai', 'Asaripallam', 'Ashokapuram', 'Athani', 'Athanur', 'Athimarapatti', 'Athipatti', 'Athipattu', 'Athivilai', 'Athur', 'Athur', 'Attayampatti', 'Attur', 'Avadattur', 'Avadi', 'Avalapalli', 'Avalpoondurai', 'Avanashi', 'Avaniapuram', 'A. Vellalapatti', 'Ayacode', 'Ayakudi', 'Ayappakkam', 'Aygudi', 'Ayothiapattinam', 'Ayyalur', 'Ayyampalayam', 'Ayyampettai', 'Ayyampettai', 'Ayyappanthangal', 'Azhagiapandipuram', 'Balakrishnampatti', 'Balakrishnapuram', 'Balasamudram', 'Bargur', 'Batlagundu', 'Belur', 'Bhavani', 'Bhavanisagar', 'Bhuvanagiri', 'Bikketti', 'B.Mallapuram', 'B. Meenakshipuram', 'Bodinayakanur', 'Boothapandi', 'Boothipuram', 'Brahmana Periya Agraharam', 'Chakkarapalli', 'Chathirareddipatti', 'Chatrapatti', 'Chenbagaramanputhur', 'Chengalpattu', 'Chengam', 'Chengappalli', 'Chennagiri', 'Chennai', 'Chennasamudram', 'Chennimalai', 'Cheranmadevi', 'Chetpet', 'Chettiarpatti', 'Chettinaickenpatti', 'Chettipalayam', 'Chettipalayam', 'Chettithangal', 'Chidambaram', 'Chidambaram Nm', 'Chinna Anuppanadi', 'Chinnakalayamputhur', 'Chinnakkampalayam', 'Chinnalapatti', 'Chinnamanur', 'Chinnampalayam', 'Chinnamudalaipatti', 'Chinnasalem', 'Chinnasekkadu', 'Chinnathadagam', 'Chinnavedampatti', 'Chinniam palayam', 'Chithode', 'Chitlapakkam', 'Cholapuram', 'Choozhal', 'Coimbatore', 'Colachel', 'Coonoor', 'Courtalam', 'Cuddalore', 'Dalavaipatti', 'Damalerimuthur', 'Dasanaickenpatti', 'Denkanikottai', 'Desur', 'Devadanapatti', 'Devakottai', 'Devarshola', 'Devasthanam', 'Devikapuram', 'Devipattinam', 'Dhalavoipuram', 'Dhali', 'Dhaliyur', 'Dharamapuram', 'Dharapadavedu', 'Dharapuram', 'Dharasuram', 'Dharmapuri', 'Dindigul', 'Doramangalam', 'Dusi', 'Edaganasalai', 'Edaicode', 'Edakalinadu', 'Edappadi', 'Edayanchavadi', 'Elathur', 'Elayirampannai', 'Ellakkudy', 'Ellandaikuttai', 'Elumalai', 'Eral', 'Eranapuram', 'Eraniel', 'Eriodu', 'Erode', 'Erumaipatti', 'Erumapalayam', 'Eruvadi', 'Ethapur', 'Ettayapuram', 'Ettimadai', 'Ezhudesam', 'Ganapathipuram', 'Gandhinagar', 'Gandipuram', 'Gangaikondan', 'Gangavalli', 'Ganguvarpatti', 'Gerugambakkam', 'Gingee', 'Gobichettipalayam', 'Gopalasamudram', 'Goundampalayam', 'Gudalur', 'Gudalur', 'Gudalur', 'Gudiyatham', 'Gummidipoondi', 'Gunduuppalavadi', 'Hale-Dharmapuri', 'Hanumanthampatti', 'Harur', 'Harveypatti', 'Highways', 'Hosur', 'Hubbathala', 'Huligal', 'Idikarai', 'Iduvai', 'Ilampillai', 'Ilanji', 'Ilayangudi', 'Iluppaiyurani', 'Iluppur', 'Inam Karur', 'Inam Maniyachi', 'Injambakkam', 'Iravadanallur', 'Irugur', 'Jaffrabad', 'Jagathala', 'Jalakandapuram', 'Jalladiampet', 'Jambai', 'Jayankondam', 'Jolarpet', 'Kadambathur', 'Kadambur', 'Kadaparai', 'Kadathur', 'Kadayal', 'Kadayam', 'Kadayampatti', 'Kadayanallur', 'Kadhirvedu', 'Kailasagiri', 'Kakkalur', 'Kalakad', 'Kalambur', 'Kalapatti', 'Kalappanaickenpatti', 'Kalavai', 'Kalinjur', 'Kaliyakkavilai', 'Kalladaikurichi', 'Kallakkurichi', 'Kallakudi', 'Kallangudy', 'Kallukuttam', 'Kalparapatti', 'Kalugumalai', 'Kamayagoundanpatti', 'Kambainallur', 'Kambam', 'Kamuthi', 'Kanadukathan', 'Kanakkampalayam', 'Kanakkampalayam', 'Kanam', 'Kancheepuram', 'Kandanur', 'Kangeyam', 'Kangeyanallur', 'Kaniyambadi', 'Kaniyur', 'Kaniyur', 'Kanjikoil', 'Kannamangalam', 'Kannampalayam', 'Kannanendal', 'Kannankurichi', 'Kannanoor', 'Kannapalayam', 'Kannivadi', 'Kannivadi', 'Kanniyakumari', 'Kappiyarai', 'Karadipatti', 'Karaikkudi', 'Karaipudur', 'Karamadai', 'Karambakkam', 'Karambakkudi', 'Kariamangalam', 'Kariapatti', 'Karugampattur', 'Karukkalvadi', 'Karumandi Chellipalayam', 'Karumathampatti', 'Karungal', 'Karunguzhi', 'Karuppur', 'Karur', 'Kasinayagampatti', 'Kasipalayam (E)', 'Kasipalayam (G)', 'Katpadi', 'Kattathurai', 'Kattiganapalli', 'Kattimancode', 'Kattivakkam', 'Kattumannarkoil', 'Kattupakkam', 'Kattuputhur', 'Kaveripakkam', 'Kaveripattinam', 'Kayalpattinam', 'Kayatharu', 'Keelakarai', 'Keelamanjakudi', 'Keeramangalam', 'Keeranur', 'Keeranur', 'Keeripatti', 'Keezhkulam', 'Kelamangalam', 'Kembainaickenpalayam', 'Kethi', 'Kila Ambur', 'Kilampadi', 'Kilapavoor', 'Kilkunda', 'Killai', 'Killiyoor', 'Kilmanavur', 'Kilpennathur', 'Kilpudupakkam', 'Kilvaithinankuppam', 'Kilvelur', 'Kinathukadavu', 'K.Madapur', 'Kodaikanal', 'Kodavasal', 'Kodivalasa', 'Kodumudi', 'Koilambakkam', 'Koilpalayam', 'Kolappalur', 'Kolathupalayam', 'Kolathur', 'Kollancode', 'Kollankoil', 'Komaralingam', 'Kombai', 'Konavattam', 'Kondalampatti', 'Kondappanaickenpatti', 'Kondasamudram', 'Kondichettipatti', 'Kondur', 'Konerikuppam', 'Konganapuram', 'Kooraikundu', 'Koothappar', 'Koradacheri', 'Kosavampatti', 'Kotagiri', 'Kothanallur', 'Kottagoundampatty', 'Kottaiyur', 'Kottakuppam', 'Kottaram', 'Kottivakkam', 'Kottur', 'Kovalam', 'Kovilpatti', 'Kovur', 'Krishnagiri', 'Krishnarayapuram', 'Krishnasamudram', 'Kuchanur', 'Kuhalur', 'Kulappuram', 'Kulasekaram', 'Kulathur', 'Kulithalai', 'Kullursandai', 'Kumaragiri', 'Kumarapalayam', 'Kumarapuram', 'Kumbakonam', 'Kundrathur', 'Kuniyamuthur', 'Kunnathur', 'Kurichi', 'Kurinjipadi', 'Kurudampalayam', 'Kurukkupatti', 'Kurumbalur', 'Kurumbapatti', 'Kuruppanaickenpalayam', 'Kuthalam', 'Kuthanallur', 'Kuthankuzhi', 'Kuzhithurai', 'Labbaikudikadu', 'Lakkampatti', 'Lakkiampatti', 'Lakshminarayanapuram', 'Lalgudi', 'Lalpet', 'Madaharpakkam', 'Madambakkam', 'Madambakkam', 'Madathukulam', 'Madavaram', 'Madippakkam', 'Madukkarai', 'Madukkur', 'Madurai', 'Maduranthakam', 'Maduravoyal', 'Majaragollappatti', 'Makkinampatti', 'Malayadi', 'Mallamooppampatti', 'Mallankinaru', 'Mallasamudram', 'Mallur', 'Malumichampatti', 'Mamallapuram', 'Mamsapuram', 'Manachanallur', 'Manakudi', 'Manali', 'Manalmedu', 'Manalurpet', 'Manamadurai', 'Manapakkam', 'Manapparai', 'Manavalakurichi', 'Mancad', 'Mandaikadu', 'Mandapam', 'Mangadu', 'Mangalam', 'Mangalampet', 'Manickapuram', 'Manimutharu', 'Manjakollai', 'Manjalumoodu', 'Mannarai', 'Mannargudi', 'Manthithoppu', 'Mappilaiurani', 'Maraimalainagar', 'Marakkanam', 'Maramangalathupatti', 'Marandahalli', 'Markayankottai', 'Marudur', 'Marungur', 'Maruthancode', 'Masinaickenpatty', 'Mathicode', 'Mathigiri', 'Mathur', 'Mayiladuthurai', 'Mecheri', 'Medavakkam', 'Meenambakkam', 'Melacheval', 'Melachokkanathapuram', 'Melagaram', 'Melamadai', 'Melaparthibanur', 'Melathiruppanthuruthi', 'Melattur', 'Melpattampakkam', 'Melur', 'Melvisharam', 'Methukummal', 'Mettamalai', 'Mettunasuvanpalayam', 'Mettupalayam', 'Mettupalayam', 'Mettur', 'Mevalurkuppam', 'Midalam', 'Milavittan', 'Minampalli-Pachamadevi', 'Minjur', 'Modakurichi', 'Mohanur', 'Molachur', 'Mookondapalli', 'Moolakaraipatti', 'Moovarasampettai', 'Mopperipalayam', 'Morattupalayam', 'Mudukulathur', 'Mugalivakkam', 'Mukasipidariyur', 'Mukkudal', 'Mulagumudu', 'Mulanur', 'Mullipattu', 'Muruganpalayam', 'Musiri', 'Muthanampalayam', 'Muthugoundam Pudur', 'Muthukadu', 'Muthupet', 'Muthur', 'Muttayyapuram', 'Muzhucode', 'Mylaudy', 'Nadaikavu', 'Nadukuthagai', 'Naduvaneri', 'Naduvattam', 'Nagamalaipudukottai', 'Nagamangalam', 'Nagapattinam', 'Nagavakulam', 'Nagercoil', 'Nagojanahalli', 'Nallampatti', 'Nallipalayam', 'Nalloor', 'Nallur', 'Nallur $', 'Namagiripettai', 'Namakkal', 'Nambiyur', 'Nandambakkam', 'Nandivaram - Guduvancheri', 'Nangavalli', 'Nangavaram', 'Nanguneri', 'Nanjikottai', 'Nannilam', 'Naranammalpuram', 'Naranapuram', 'Narasimhanaicken-palayam', 'Narasingam', 'Narasingapuram', 'Narasingapuram', 'Naravarikuppam', 'Nasiyanur', 'Natchiarkoil', 'Natham', 'Nathampannai', 'Natrampalli', 'Nattalam', 'Nattapettai', 'Nattarasankottai', 'Navalpattu', 'Navlock Garden', 'Nazarathpettai', 'Nazerath', 'Nedungundram', 'Needamangalam', 'Neelagiri', 'Neelambur', 'Neelankarai', 'Neikkarapatti', 'Nellikuppam', 'Nelliyalam', 'Nemili', 'Nemilicheri', 'Neripperichal', 'Nerkunram', 'Nerkuppai', 'Nerunjipettai', 'Neykkarappatti', 'Neyveli', 'Neyyoor', 'Nilaiyur I Bit', 'Nilakkottai', 'Nolambur', 'Nullivilai', 'Odaipatti', 'Odaiyakulam', 'Oddanchatram', 'Odugathur', 'Oggiyamduraipakkam', 'Olagadam', 'Omalur', 'Orathanadu', 'Orikkai', 'Othakadai', 'Othakalmandapam', 'Ottapparai', "O' Valley", 'Overi', 'Pachchal', 'Pacode', 'Padaiveedu', 'Padandal', 'Padappai', 'Padianallur', 'Padikkasu vaithanpatti', 'Padirikuppam', 'Padmanabhapuram', 'Painkulam', 'Paiyur', 'Palaganangudy', 'Palakkodu', 'Palamedu', 'Palangarai', 'Palani', 'Palani Chettipatti', 'Palappallam', 'Palavakkam', 'Palavansathu', 'Palayam', 'Palayampatti', 'Palladam', 'Pallanthurai', 'Pallapalayam', 'Pallapalayam', 'Pallapatti', 'Pallapatti', 'Pallathur', 'Pallavaram', 'Pallikaranai', 'Pallikonda', 'Pallipalayam', 'Pallipalayam Agraharam', 'Pallipattu', 'Pallippadai', 'Paloor', 'Palugal', 'Pammal', 'Panagudi', 'Panaimarathupatti', 'Panapakkam', 'Pandamangalam', 'Pandavarmangalam', 'Pannaikadu', 'Pannaipuram', 'Panpoli', 'Panruti', 'Papanasam', 'Pappankurichi', 'Papparapatti', 'Papparapatti', 'Pappireddipatti', 'Paramakudi', 'Paramathi', 'Parangipettai', 'Paraniputhur', 'Paravai', 'Pasur', 'Pathamadai', 'Pattanam', 'Pattinam', 'Pattinamkattan', 'Pattiveeranpatti', 'Pattukkottai', 'Pavali', 'Peddikuppam', 'Peerkankaranai', 'Pennadam', 'Pennagaram', 'Pennathur', 'Peraiyur', 'Peralam', 'Perambakkam', 'Perambalur', 'Peranamallur', 'Peravurani', 'Periagaram', 'Periakottai', 'Periapattinam', 'Periyakodiveri', 'Periyakulam', 'Periyakurichi', 'Periyamanali', 'Periyanaicken-palayam', 'Periya Negamam', 'Periyapatti', 'Periyasemur', 'Pernampattu', 'Perumagalur', 'Perumagoundampatti', 'Perumanallur', 'Perumandi', 'Perundurai', 'Perungalathur', 'Perungudi', 'Perungulam', 'Perur', 'Perur Chettipalayam', 'Peruvilai', 'Pethampalayam', 'Pethanaickenpalayam', 'Pichandarkovil', 'Pillanallur', 'P. J. Cholapuram', 'P. Mettupalayam', 'P. N. Patti', 'Polichalur', 'Pollachi', 'Polur', 'Ponmanai', 'Ponnamaravathi', 'Ponnampatti', 'Ponneri', 'Poolambadi', 'Poolampatti', 'Poolankinar', 'Pooluvapatti', 'Poonamallee', 'Poravacheri', 'Porur', 'Pothanur', 'Pothatturpettai', 'Pudiyamputhur', 'Pudukkottai', 'Pudukkottai', 'Pudupalayam', 'Pudupalayam Agraharam', 'Pudupatti', 'Pudupattinam', 'Pudupattinam', 'Pudur (S)', 'Puduvayal', 'Puliankudi', 'Puliyoorsalai', 'Puliyur', 'Pullampadi', 'Punjaipugalur', 'Punjaipuliampatti', 'Punjai Thottakurichi', 'Puthagaram', 'Puthalam', 'Putheri', 'Puthukkadai', 'Puthur Agraharam', 'Puvalur', 'Puzhal', 'Puzhithivakkam', 'Rajapalayam', 'Rajapalayam', 'Ramalingapuram', 'Ramanathapuram', 'Ramapuram', 'Rameswaram', 'Ranipettai', 'Rasipuram', 'Rayagiri', 'Reethapuram', 'Rosalpatti', 'R. Pudupatti', 'R. S. Mangalam', 'Rudravathi', 'Sakkarakottai', 'Sakkimangalam', 'Salamedu', 'Salangapalayam', 'Salem', 'Samalapuram', 'Samanatham', 'Samathur', 'Samayanallur', 'Sambavar Vadagarai', 'Samusigapuram', 'Sankaramanallur', 'Sankarankoil', 'Sankaraperi', 'Sankarapuram', 'Sankarapuram', 'Sankari', 'Sankarnagar', 'Sanniyasigundu', 'Saravanampatti', 'Sarcarsamakulam', 'Sathankulam', 'Sathiyavijayanagaram', 'Sathkar', 'Sathuvachari', 'Sathyamangalam', 'Sattur', 'Sayalgudi', 'Sayapuram', 'Seerapalli', 'Seithur', 'Selathampatti', 'Sembakkam', 'Sembedu', 'Sembianallur', 'Semmipalayam', 'Senapiratti', 'Sengamalanachiarpatti', 'Senneerkuppam', 'Senthamangalam', 'Sentharapatti', 'Senur', 'Sethiathoppu', 'Sevilimedu', 'Sevugampatti', 'Sevur', 'Sevur', 'Shenbakkam', 'Shenkottai', 'Sholavandan', 'Sholinganallur', 'Sholingur', 'Sholur', 'Sikkarayapuram', 'Silaiman', 'Silapadi', 'Singampuneri', 'Singaperumalkoil', 'Sircar Periapalayam', 'Sirkali', 'Sirugamani', 'Sirukalathur', 'Sirukaveripakkam', 'Sirumugai', 'Sithayankottai', 'Sithurajapuram', 'Sivaganga', 'Sivagiri', 'Sivagiri', 'Sivagiripatti', 'Sivagnanapuram', 'Sivakasi', 'Sivanthipuram', 'Somayampalayam', 'Soolakkarai', 'Soorapattu', 'South Kannanur', 'South Kodikulam', 'South Nallur', 'Srikalikapuram', 'Srimushnam', 'Sriperumbudur', 'Sriramapuram', 'Srivaikuntam', 'Srivilliputhur', 'St. Thomas Mount-cum-Pallavaram', 'Suchindrum', 'Suleeswaranpatti', 'Sulur', 'Sumaitheerthapuram', 'Sundarapandiam', 'Sundarapandianpattinam', 'Sundarapandiapuram', 'SuPallipattu', 'Surampatti', 'Surandai', 'Suriyampalayam', 'Swamimalai', 'Tajpura', 'Tambaram', 'Tenkasi', 'Terkukallikulam', 'Thadikarankonam', 'Thadikombu', 'Thakkolam', 'Thalainayar', 'Thalakudi', 'Thamaraikulam', 'Thammampatti', 'Thanakkankulam', 'Thanjavur', 'Thanthoni', 'Thappakuttai', 'Tharamangalam', 'Tharangambadi', 'Thathaiyangarpet', 'Thathankuttai', 'Thazhakudy', 'Thedavur', 'Theerthagiriyampattu', 'Thenambakkam', 'Thengampudur', 'Theni Allinagaram', 'Thenkarai', 'Thenkarai', 'Thenthamaraikulam', 'Thenthiruperai', 'Therur', 'Thevaram', 'Thevur', 'Thiagadurgam', 'Thikkanamcode', 'Thindal', 'Thingalnagar', 'Thirparappu', 'Thirukarungudi', 'Thirukkattupalli', 'Thirumalayampalayam', 'Thirumalpur', 'Thirumangalam', 'Thirumazhisai', 'Thirumuruganpoondi', 'Thirunagar', 'Thirunageswaram', 'Thiruneermalai', 'Thirunindravur', 'Thiruparankundram', 'Thiruporur', 'Thiruppalai', 'Thiruppanandal', 'Thirupuvanam', 'Thirupuvanam', 'Thiruthangal', 'Thiruthuraipoondi', 'Thiruvaiyaru', 'Thiruvalam', 'Thiruvallur', 'Thiruvarur', 'Thiruvattar', 'Thiruvenkadam', 'Thiruvennainallur', 'Thiruverumbur', 'Thiruvidaimarudur', 'Thiruvithancode', 'Thisayanvilai', 'Thondamuthur', 'Thondi', 'Thoothukkudi', 'Thorapadi', 'Thorapadi', 'Thottipalayam', 'Thottiyam', 'Thozhur', 'Thudiyalur', 'Thuraiyur', 'Thuthipattu', 'Thuvakudi', 'Timiri', 'Tindivanam', 'Tiruchendur', 'Tiruchengode', 'Tiruchirappalli', 'Tirukalukundram', 'Tirukkoyilur', 'Tirumalaigiri', 'Tirunelveli', 'Tirupathur', 'Tirupathur', 'Tirupattur', 'Tiruppur', 'Tirusulam', 'Tiruttani', 'Tiruvannamalai', 'Tiruverkadu', 'Tiruvethipuram', 'Tiruvottiyur', 'Tittacheri', 'Tittakudi', 'Tittangulam', 'T.Kallupatti', 'TNPL Pugalur', 'Udangudi', 'Udayarpalayam', 'Udhagamandalam', 'Udumalaipettai', 'Ullur', 'Ulundurpettai', 'Unjalur', 'Unnamalaikadai', 'Uppidamangalam', 'Uppiliapuram', 'Urapakkam', 'Usilampatti', 'Usuppur', 'Uthamapalayam', 'Uthangarai', 'Uthayendram', 'Uthiramerur', 'Uthukkottai', 'Uthukuli', 'Vadakarai Keezhpadugai', 'Vadakkanandal', 'Vadakkuvalliyur', 'Vadalur', 'Vadamadurai', 'Vadavalli', 'Vaddakkankulam', 'Vadi', 'Vadipatti', 'Vadugapatti', 'Vadugapatti', 'Vaitheeswarankoil', 'Valangaiman', 'Valasaravakkam', 'Valathur', 'Valavandankottai', 'Valavanur', 'Valayambattu', 'Vallam', 'Vallam', 'Valparai', 'Valvaithankoshtam', 'Vanagaram', 'Vanapadi', 'Vanavasi', 'Vandalur', 'Vandavasi', 'Vandiyur', 'Vanganur', 'Vaniputhur', 'Vaniyambadi', 'Vanniyoor', 'Varadarajanpettai', 'Vasudevanallur', 'Vathirairuppu', 'Vavarai', 'Vazhapadi', 'Vedapatti', 'Vedaranyam', 'Vedasandur', 'Veeraganur', 'Veerakeralam', 'Veerakkalpudur', 'Veerapandi', 'Veerapandi', 'Veerapandi', 'Veerapandianpattinam Town', 'Veerappanchatiram', 'Veeravanallur', 'Velampalayam', 'Velankanni', 'Velayudampalayam', 'Vellakinar', 'Vellakkalpatty', 'Vellakoil', 'Vellalur', 'Vellamcode', 'Vellaravalli', 'Vellimalai', 'Vellore', 'Vellottamparappu', 'Velur', 'Vembadithalam', 'Vengampudur', 'Vengathur', 'Vengavasal', 'Vengikkal', 'Venkarai', 'Venkatachalapuram', 'Venkatapuram', 'Vennanthur', 'Veppathur', 'Verkilambi', 'Vettaikaranpudur', 'Vettavalam', 'Vijayapuri', 'Vikramasingapuram', 'Vikravandi', 'Vilacheri', 'Vilangudi', 'Vilankurichi', 'Vilapakkam', 'Vilar', 'Vilathikulam', 'Vilathurai', 'Vilavancode', 'Vilavur', 'Villukuri', 'Viluppuram', 'Viraganur', 'Viralimalai', 'Virinchipuram', 'Virudampattu', 'Virudhachalam', 'Virudhunagar', 'Virupakshipuram', 'Viswanatham', 'V.Pudupatti', 'V. Pudur', 'Walajabad', 'Walajapet', 'Wellington', 'Yercaud', 'Zamin Uthukuli', 'Zuzuvadi']

var cbe_area = ['Goundampalayam', 'Ganapathy', 'Chinnavedampatti', 'Goundampalayam', 'Ganapathy', 'Chinnavedampatti', 'Press Colony', 'Vadamadurai', 'Kanuvai', 'KNG Pudur', 'NGGO Colony', 'Thudiyalur', 'Vellakinar', 'Bharathi Nagar', 'Sivanandhapuram', 'Rathinapuri', 'Tatabad', 'Sivananda Colony', 'Town Hall', 'Gandhipuram', 'Ukkadam', 'Kottaimedu', 'Ramnagar', 'Sukrawarpettai', 'R.S Puram', 'Saibaba Colony', 'Venkatapuram', 'Ponnairajapuram', 'Race Course', 'Gopalapuram', 'Sidhapudur', 'Avarampalayam', 'P.N Palayam', 'Sundakkamuthur', 'Podanur', 'Karumbukadai', 'Sundarapuram', 'Kurichi', 'Eachanari', 'Chettipalayam', 'Vellalore', 'Kuniyamuthur', 'Sugunapuram', 'Kovaipudur', 'Ramnathapuram', 'Singanallur', 'Puliakulam', 'Ondipudur', 'Varadarajapuram', 'Peelamedu', 'Meena Estate', 'Udayampalayam', 'Nanjundapuram', 'Nehru Nagar', 'Vilankurichi', 'Ganapathy', 'Cheranmanagar', 'Nallampalayam', 'Gandhimanagar', 'Chinniampalayam', 'Sowripalayam', 'G.V Residency', 'Uppilipalayam', 'Perur', 'Selvapuram', 'Vadavalli', 'Veerakeralam', 'Veedapaati', 'P.N.Pudur', 'Kalveerampalayam', 'Karamadai', 'Periyanaickenpalayam', 'Poochiyur', 'RAVATHA KOLLANUR', 'Thadagam', 'Maruthamalai', 'Pannimadai', 'Saravanampatti', 'Kalapatti', 'Keeranatham', 'Pachapalayam', 'Walayar', 'K.G Chavadi', 'Ettimadai', 'Odaiyakulam', 'Thirumalayampalayam', 'Somanur', 'Irugur', 'Sulur', 'Thondamuthur', 'Pooluvapatti', 'Veerakeralam', 'Karunya Nagar', 'Thenkarai', 'Narasipuram', 'Puthur', 'Alanthurai', 'Veddapaati', 'Kinathukadavu', 'Myleripalayam', 'Malumichampatti', 'Othakalmandapam', 'Samathur', 'Suleeswaranpatti', 'Maddukarai', 'Annamalai hills']

for(var i = 0; i < cities.length; i++){
    var opt = document.createElement("option");
    opt.value = cities[i];
    opt.innerHTML = cities[i];
    document.getElementById("template").content.append(opt);
}

for(var i = 0; i < cbe_area.length; i++){
    var opt = document.createElement("option");
    opt.value = cbe_area[i];
    opt.innerHTML = cbe_area[i];
    document.getElementById("template-cbe").content.append(opt);
}

window.onload = function () {
    var search = document.querySelector("#city");
    var search1 = document.querySelector("#city1");
    var search2 = document.querySelector("#city2");
    var search3 = document.querySelector("#city3");
    var cbe1 = document.querySelector("#cbe1");
    var cbe2 = document.querySelector("#cbe2");
    var cbe_data_list = document.querySelector("#cbe-area");
    var cbe_template = document.querySelector("#template-cbe").content;
    var datalist = document.querySelector("#cities");
    var template = document.querySelector("#template").content;
    console.log(cbe_template);
    search.onkeyup =  function handler(event){
        console.log("hi");
        while(datalist.children.length) datalist.removeChild(datalist.firstChild);
        var inputVal =new RegExp(search.value.trim(), 'i');
        var cloneOpt = template.cloneNode(true);
        var set = Array.prototype.reduce.call(cloneOpt.children, function serachFilter(frag, el){
            if(inputVal.test(el.textContent) && frag.children.length < 5) frag.appendChild(el);
            return frag;
        }, document.createDocumentFragment());
        console.log(set);
        datalist.appendChild(set);
    }
    search1.onkeyup =  function handler(event){
        console.log("hi");
        while(datalist.children.length) datalist.removeChild(datalist.firstChild);
        var inputVal =new RegExp(search1.value.trim(), 'i');
        var cloneOpt = template.cloneNode(true);
        var set = Array.prototype.reduce.call(cloneOpt.children, function serachFilter(frag, el){
            if(inputVal.test(el.textContent) && frag.children.length < 5) frag.appendChild(el);
            return frag;
        }, document.createDocumentFragment());
        console.log(set);
        datalist.appendChild(set);
    }
    search2.onkeyup =  function handler(event){
        console.log("hi");
        while(datalist.children.length) datalist.removeChild(datalist.firstChild);
        var inputVal =new RegExp(search2.value.trim(), 'i');
        var cloneOpt = template.cloneNode(true);
        var set = Array.prototype.reduce.call(cloneOpt.children, function serachFilter(frag, el){
            if(inputVal.test(el.textContent) && frag.children.length < 5) frag.appendChild(el);
            return frag;
        }, document.createDocumentFragment());
        console.log(set);
        datalist.appendChild(set);
    }
    search3.onkeyup =  function handler(event){
        console.log("hi");
        while(datalist.children.length) datalist.removeChild(datalist.firstChild);
        var inputVal =new RegExp(search3.value.trim(), 'i');
        var cloneOpt = template.cloneNode(true);
        var set = Array.prototype.reduce.call(cloneOpt.children, function serachFilter(frag, el){
            if(inputVal.test(el.textContent) && frag.children.length < 7) frag.appendChild(el);
            return frag;
        }, document.createDocumentFragment());
        console.log(set);
        datalist.appendChild(set);
    }

    cbe1.onkeyup =  function handler(event){
        console.log("hi");
        while(cbe_data_list.children.length) cbe_data_list.removeChild(cbe_data_list.firstChild);
        var inputVal = new RegExp(cbe1.value.trim(), 'i');
        var cloneOpt = cbe_template.cloneNode(true);
        var set = Array.prototype.reduce.call(cloneOpt.children, function serachFilter(frag, el){
            if(inputVal.test(el.textContent) && frag.children.length < 7) frag.appendChild(el);
            return frag;
        }, document.createDocumentFragment());
        console.log(set);
        cbe_data_list.appendChild(set);
    }

    cbe2.onkeyup =  function handler(event){
        console.log("hi");
        while(cbe_data_list.children.length) cbe_data_list.removeChild(cbe_data_list.firstChild);
        var inputVal = new RegExp(cbe2.value.trim(), 'i');
        var cloneOpt = cbe_template.cloneNode(true);
        var set = Array.prototype.reduce.call(cloneOpt.children, function serachFilter(frag, el){
            if(inputVal.test(el.textContent) && frag.children.length < 7) frag.appendChild(el);
            return frag;
        }, document.createDocumentFragment());
        cbe_data_list.appendChild(set);
    }
}

for(var k = 0; k < times.length; k++){
    times[k].valueAsDate = t;
}
for(var k = 0; k < dates.length; k++){
    dates[k].setAttribute('min', today);
    dates[k].valueAsDate = t;
}

function removeActive(){
    for(var i = 0; i < list.length; i++){
        list[i].classList.remove("active");
    }
}

function changeActive(id){
    var tabs = document.getElementsByClassName("tabs");
    var forms = document.getElementsByClassName("forms");
    for(var j = 0; j < forms.length; j++)
        forms[j].style.display = "none";
    for(var i = 0; i < tabs.length; i++)
        tabs[i].classList.remove("active");
    document.getElementsByClassName(id)[0].classList.add("active");
    document.getElementById(id).style.display = "block";
}

document.querySelector("#local").addEventListener("submit", async (e) =>{
    e.preventDefault();
    xhr.open("POST", url_trip);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var form = e["path"][0]
    var from = form[0].value;
    var to = form[1].value;
    var date = form[2].value;
    var pick_up = form[3].value;
    var number = form[4].value;
    var mail = form[5].value;
    xhr.send(`from_place=${from}&to_place=${to}&date=${date}&pick_up_time=${pick_up}&number=${number}&mail=${mail}&trip_type=Local Trip`);
    setTimeout(function(){
        document.querySelector(".popup").classList.add("active");
        document.querySelector(".body").classList.add("blur");
        document.querySelector(".navbar").classList.add("blur");
        document.querySelector("footer").classList.add("blur");
    }, 2000);
});

document.querySelector("#one-way-trip").addEventListener("submit", async (e) =>{
    e.preventDefault();
    xhr.open("POST", url_trip);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var form = e["path"][0]
    var from = form[0].value;
    var to = form[1].value;
    var date = form[2].value;
    var pick_up = form[3].value;
    var number = form[4].value;
    var mail = form[5].value;
    xhr.send(`from_place=${from}&to_place=${to}&date=${date}&pick_up_time=${pick_up}&number=${number}&mail=${mail}&trip_type=One Way Trip`);
    setTimeout(function(){
        document.querySelector(".popup").classList.add("active");
        document.querySelector(".body").classList.add("blur");
        document.querySelector(".navbar").classList.add("blur");
        document.querySelector("footer").classList.add("blur");
    }, 2000);
});

document.querySelector("#round-trip").addEventListener("submit", async (e) =>{
    e.preventDefault();
    xhr.open("POST", url_trip);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var form = e["path"][0]
    var from = form[0].value;
    var to = form[1].value;
    var date = form[2].value;
    var return_date = form[3].value;
    var pick_up = form[4].value;
    var number = form[5].value;
    var mail = form[6].value;
    xhr.send(`from_place=${from}&to_place=${to}&date=${date}&pick_up_time=${pick_up}&return_date=${return_date}&number=${number}&mail=${mail}&trip_type=Round Trip`);
    setTimeout(function(){
        document.querySelector(".popup").classList.add("active");
        document.querySelector(".body").classList.add("blur");
        document.querySelector(".navbar").classList.add("blur");
        document.querySelector("footer").classList.add("blur");
    }, 2000);
});

document.querySelector("#contact-form").addEventListener("submit", async (e) =>{
    e.preventDefault();
    xhr.open("POST", url_contact);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var form = e["path"][0]
    var name = form[0].value;
    var mail = form[1].value;
    var subject = form[2].value;
    var message = form[3].value;
    xhr.send(`name=${name}&email=${mail}&subject=${subject}&message=${message}`);
    setTimeout(function(){
        document.querySelector(".popup").classList.add("active");
        document.querySelector(".body").classList.add("blur");
        document.querySelector(".navbar").classList.add("blur");
        document.querySelector("footer").classList.add("blur");
    }, 2000);
});

function closePopUp(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".body").classList.remove("blur");
    document.querySelector(".navbar").classList.remove("blur");
    document.querySelector("footer").classList.remove("blur");
    document.querySelector("#local").reset();
    document.querySelector("#one-way-trip").reset();
    document.querySelector("#round-trip").reset();
    document.querySelector("#contact-form").reset();
    for(var k = 0; k < times.length; k++){
        times[k].valueAsDate = t;
    }
    for(var k = 0; k < dates.length; k++){
        dates[k].setAttribute('min', today);
        dates[k].valueAsDate = t;
    }
    
}

$(document).ready(function(){
    $(window).scroll(function(){
        // indicator.style.transform = `translateX(${(100 * (this.scrollY / positionY)) + ((this.scrollY / positionY) * 10)}px)`;
        var scale = this.scrollY / positionY;
        if (scale < 0.15){
            if(navbar.classList.contains("sticky")){
                navbar.classList.remove("sticky");
            }
        }else{
            navbar.classList.add("sticky");
        }

        // if(scale < 0.8 ){
        //     removeActive();
        //     document.querySelector(".home").classList.add("active");
        //     document.title = "GEE Travels | Home"
        // }
        // else if (scale > 0.85 && scale < 1.8){
        //     removeActive();
        //     document.querySelector(".about").classList.add("active");
        //     document.title = "GEE Travels | About"
        // }else if(scale > 1.9 && scale < 2.8){
        //     removeActive();
        //     document.querySelector(".services").classList.add("active");
        //     document.title = "GEE Travels | Services"
        // }else if(scale > 2.9){
        //     removeActive();
        //     document.querySelector(".contact").classList.add("active");
        //     document.title = "GEE Travels | Contact"
        // }
    });

    $('.menu-btn').click(function(){
        $('.navbar').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.collapse-navbar').click(function(){
        $('.navbar').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});

new ResizeSensor(jQuery("#home"), function(){
    console.log(document.querySelector("#home").offsetHeight);
});

new ResizeSensor(jQuery("#services"), function(){
    console.log(document.querySelector("#services").offsetHeight);
});

window.onresize = function(){
    positionY = window.innerHeight;
    width = window.innerWidth;
}