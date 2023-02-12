+++
title = "《«»》 review/復習する/검토"
description = ""

lastmod = {{ .Date }}                 # last update; manually adjust to local timezone
publishdate = {{ .Date }}             # first publication; manually adjust to local timezone
date = {{ .Date }}                    # first created; manually adjust to local timezone
#expirydate = 2022-04-07T17:53:01+08:00              # expiry; manually adjust to local timezone

#aliases = [""]                                        # "/post"
#url = ""                                              # "path/post"; override .Permalink
slug = ""
translationKey = "{SLUG}-{DATE}"
relCanonical = "https://im.youronly.one/{BLOG-NAME}/{LANG}/{POST-TITLE}-{DATE}/"
#disqus_url = ""                                       # not used in sites by Yelosan Publishing
#disquq_identifier = ""                                # set if date of this content is different from main translation

#redirectto = ""                                       # Yelosan Publishing: used in _index.md
#metarobots = "noindex"                                # Yelosan Publishing: used in _index.md

#syndications = [""]

channels = [""]
#categories = [""]
#keywords = [""]
#series = [""]
#tags = [""]

comments = true
#weight = ""

#featured = true
#math = true
toc = true

translation = false
translationby = ""

#audio = [""]
#images = ["images/{LETTER}/{FILENAME}.webp"]
#videos = ["https://www.youtube.com/watch?v="]

type = "review"                                             # article, sitepage, review

draft = true

#license = ""                                          # only set if the post license is not the same as the site license

contenttypes = ["CriticReview"]                                                   # Semantic Web JSON-LD
[semweb]                                                              # Semantic Web JSON-LD
  type = ""                                                           # Book, Movie, TVSeries

# For adaptations
#[semweb.product.isbasedon]
#  name = ""
#  alternatenames = [""]
#  sameas = [""]

#[semweb.product.isbasedon.author]
#  name = ""
#  alternatenames = [""]
#  sameas = [""]

[semweb.review]
  snippet = ""
  rating = ""

[semweb.product]
  name = ""
  #alternatenames = [""]
  sameas = [""]
  countryoforigin = ""
  description = ""
  datepublished = ""
  categories = [""]

# For TVSeries
#[semweb.product.season]
#  name = "Season 1 / シーズン1 / 시즌 1"
#  totalepisodes = ""
#  start = ""
#  end = ""

# For TVSeries and if reviewing an episode
#[semweb.product.season.episode]
#  epnumber = ""
#  name = "Episode / エピソード / 에피소드"
#  datepublished = ""

# Duplicate as necessary
[[semweb.actor]]
  name = ""
  #alternatenames = [""]
  sameas = [""]
[[semweb.character]]
  name = ""
  #alternatenames = [""]
  sameas = [""]

# Duplicate for more Director entries
[[semweb.director]]
  name = ""
  #alternatenames = [""]
  sameas = [""]

# Duplicate for more Writer entries
[[semweb.writer]]
  name = ""
  #alternatenames = [""]
  sameas = [""]

#### AUTHOR: SNOWORLD ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Snoworld ❄️ / 雪の世界 ❄️ / 스노우 월드 ❄️"
#  url = "https://im.youronly.one/snoworld/"
#  avatar = "https://rsc.youronly.one/img/y/snoworld-square.webp"
#  #rel = "noopener"

#### AUTHOR: TECHMAGUS ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "techmagus 🚀 / ハイテク マギ 🚀 / 테크 마구스 🚀"
#  url = "https://im.youronly.one/techmagus/"
#  avatar = "https://rsc.youronly.one/img/y/techmagus-Architetto-Esperiment-chimico.webp"
#  #rel = "noopener"

#### AUTHOR: ONE WAY FAITH ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "One Way Faith 🛐 / 一方向の信仰 🛐 / 편도 신앙 🛐"
#  url = "https://im.youronly.one/way/"
#  avatar = "https://img.youronly.one/works/FlagMenorah-Proto-(CC0).webp"
#  #rel = "noopener"

#### AUTHOR: LOVE AND RELATIONSHIPS ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Love and Relationships 💞 / 愛と関係 💞 / 사랑과 관계 💞"
#  url = "https://im.youronly.one/love/"
#  avatar = "https://rsc.youronly.one/img/y/Love_and_Relationship.webp"
#  #rel = "noopener"

#### AUTHOR: GAMESHOGUN ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "gameshogun 🎲 / ゲーム将軍 🎲 / 게임장군 🎲"
#  url = "https://im.youronly.one"
#  avatar = "https://rsc.youronly.one/img/y/gameshogun-joystick-1280x.png"
#  #rel = "noopener"

#### AUTHOR: YOOki CHRONICLES ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "YOOki Chronicles 📜 / YOOkiクロニクル 📜 / YOOki 연대기 📜"
#  url = "https://im.youronly.one/yuki/"
#  avatar = "https://rsc.youronly.one/img/y/Yuki_flag-square-300x.webp"
#  #rel = "noopener"

#### AUTHOR: KWWP ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Verses.Space (KWWP)"
#  url = "https://verses.space"
#  avatar = "https://rsc.youronly.one/img/y/KWWP-logo-01-1280wh-transparent.webp"
#  #rel = "noopener"

#### AUTHOR: HEALTH WELFARENESS ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Health Welfareness / 健康福祉 / 건강 복지"
#  url = "https://health.youronly.one"
#  avatar = "https://rsc.youronly.one/img/y/CHANGE_THIS.webp"
#  #rel = "noopener"

#### AUTHOR: WEALTH WELFARENESS ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Wealth Welfareness / 富と福祉 / 부 복지"
#  url = "https://wealth.youronly.one"
#  avatar = "https://rsc.youronly.one/img/y/CHANGE_THIS.webp"
#  #rel = "noopener"

#### AUTHOR: CONFIDENT TRAVELER ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Confident Traveler 🧭 / 自信のある旅行者 🧭 / 자신감있는 여행자 🧭"
#  url = "https://im.youronly.one/confidentraveler/"
#  avatar = "https://rsc.youronly.one/img/y/Confident_Traveler-logo-01-1500x.webp"
#  #rel = "noopener"

#### AUTHOR: FAITHFUL ATHLETE ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Faithful Athlete 🎽 / 忠実なアスリート 🎽 / 충실한 운동 선수 🎽"
#  url = "https://im.youronly.one/faithfulathlete/"
#  avatar = "https://rsc.youronly.one/img/y/Faithful_Athlete-logo-02-1500x.webp"
#  #rel = "noopener"

#### AUTHOR: YŪGEN BARD ####
#[[authors]]
#  person = "yuki"
#  #id = ""
#  name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  #name = "Yūgen Bard 🎻 / 幽玄吟遊詩人 🎻 / 幽 玄 음유 시인 🎻"
#  url = "https://im.youronly.one/yugenbard/"
#  avatar = "https://rsc.youronly.one/img/y/Yūgen_Bard-logo-01-1500x.webp"
#  #rel = "noopener"

#### AUTHORS ####
#[[authors]]
#  person = ""
#  #id = ""
#  #name = "ᜌᜓᜃᜒ (雪亮 | 스노 | Yuki)"
#  name = "guest author"
#  url = ""
#  avatar = ""
#  rel = "noopener external nofollow"
+++

SUMMARY

<!--more-->

## Synopsis / あらすじ / 개요

## Story / ストーリー / 이야기

## Performance / 出来栄え / 성능

## Music / 音楽 / 음악

## Production / 生産 / 생산

## Verdict / 評決 / 평결을 내리다

## Official trailer / 公式トレーラー / 공식 트레일러

## OST

---

{{< image
  type="imagecoverattrib"

  isrepresentativeofpage=true

  link="images/{LETTER}/{FILENAME}.png"
  linkrel="noopener"
  thumbnailurl=""

  title=""
  caption=""
  alt=""
  embeddedtextcaption=""
  inlanguage=""

  licensecode=""
  licenseurl=""
  licensename=""

  acquirelicensepage=""
  copyrightnotice=""
  credittext=""

  attribto="I'M YourOnly.One"
  attriburl="https://im.youronly.one/"
  attribrel="noopener"

  cc0country=""
  cc0countrycode=""
  cc0countryurl=""
>}}

---

注意:ネイバーPapago神経翻訳
주의사항 : 네이버 파파고 신경번역

---

Only use the following if needed

<!-- markdownlint-disable-next-line -->

<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
