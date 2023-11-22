
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React from 'react'
import Slide from '../screens/Slide'

const images = [
  { key: 1, image: require('../img/khampha/themaskedsinger.png') },
  { key: 2, image: require('../img/khampha/hothonhot.png') },
  { key: 3, image: require('../img/khampha/chamsocem.png') },
  { key: 4, image: require('../img/khampha/weekend.png') },
];

const data = [
  {
    image1: require('../img/khampha/live.png'),
    image2: require('../img/khampha/BXH.png'),
    id: 1,
  },
  {
    image1: require('../img/khampha/GenZHits.png'),
    image2: require('../img/khampha/Vpop.png'),
    id: 2,
  },
  {
    image1: require('../img/khampha/tiktok.png'),
    image2: require('../img/khampha/remix.png'),
    id: 3,
  },
  {
    image1: require('../img/khampha/Kpop.png'),
    image2: require('../img/khampha/hiphop.png'),
    id: 4,
  },
  {
    image1: require('../img/khampha/Indie.png'),
    image2: require('../img/khampha/chill.png'),
    id: 5,
  },
  {
    image1: require('../img/khampha/yeu.png'),
    image2: require('../img/khampha/randb.png'),
    id: 6,
  },
  {
    image1: require('../img/khampha/dance.png'),
    image2: require('../img/khampha/nhactrung.png'),
    id: 7,
  },
  {
    image1: require('../img/khampha/pop.png'),
    image2: require('../img/khampha/exercise.png'),
    id: 8,
  },
  {
    image1: require('../img/khampha/ngungon.png'),
    image2: require('../img/khampha/acoustic.png'),
    id: 9,
  },
  {
    image1: require('../img/khampha/trutinh.png'),
    image2: require('../img/khampha/suy.png'),
    id: 10,
  },
]

const data2 = [
  {
    image: require('../img/khampha/vu.png'),
    id: 1,
    title: 'Daily Mix',
    singer: 'Vũ.'
  },
  {
    image: require('../img/khampha/noo.png'),
    id: 2,
    title: 'Noo Phước Thịnh Mix',
    singer: 'Noo Phước Thịnh.'
  },
  {
    image: require('../img/khampha/spider.png'),
    id: 3,
    title: 'R&B/Hip Hop/Rap Mix',
    singer: 'Doja Cat.'
  },
  {
    image: require('../img/khampha/chungtacuahientai.png'),
    id: 4,
    title: 'Chúng Ta Của Hiện Tại',
    singer: 'Sơn Tùng M-TP.'
  },
  {
    image: require('../img/khampha/tungquen.png'),
    id: 5,
    title: 'Âm Nhạc Thịnh Hành',
    singer: 'Wren Evans.'
  },
  {
    image: require('../img/khampha/khamphamoi.png'),
    id: 7,
    title: 'Khám Phá Mới Mix',
    singer: 'CM1X.'
  },
  {
    image: require('../img/khampha/dailymix.png'),
    id: 8,
    title: 'Daily Mix',
    singer: 'Văn Mai Hương.'
  },
  {
    image: require('../img/khampha/trungquanidol.png'),
    id: 9,
    title: 'Trung Quân Idol Mix',
    singer: 'Trung Quân Idol.'
  },
]

const data3 = [
  {
    image3: require('../img/khampha/tungquen.png'),
    id3: 1,
    title3: '1 Từng quen',
    singer3: '- Wren Evans,Itsnk'
  },
  {
    image3: require('../img/khampha/mdanniversary.png'),
    id3: 2,
    title3: '2 MD Anniversary',
    singer3: '- CoolKid, YoungBan'
  },
  {
    image3: require('../img/khampha/mamia.png'),
    id3: 3,
    title3: '3 Mamma Mia',
    singer3: '- HIEUTHUHAI,HURRYKNG,MAN...'
  },
  {
    image3: require('../img/khampha/quacauruocem.png'),
    id3: 4,
    title3: '4 Qua Cầu Rước Em',
    singer3: '- Danhka'
  },
  {
    image3: require('../img/khampha/lift.png'),
    id3: 5,
    title3: '5 Lift',
    singer3: '- Binz'
  },
]
const data4 = [
  {
    image3: require('../img/khampha/chungtacuahientai.png'),
    id3: 1,
    title3: '1 Chúng Ta Của Hiện Tại',
    singer3: '- Sơn Tùng M-TP'
  },
  {
    image3: require('../img/khampha/maunuocmat.png'),
    id3: 2,
    title3: '2 Màu Nước Mắt',
    singer3: '- Nguyễn Trần Trung Quân'
  },
  {
    image3: require('../img/khampha/canhdongyeuthuong.png'),
    id3: 3,
    title3: '3 Cánh Đồng Yêu Thương',
    singer3: '- Trung Quân Idol'
  },
  {
    image3: require('../img/khampha/buongdoitaynhaura.png'),
    id3: 4,
    title3: '4 Buông Đôi Tay Nhau Ra',
    singer3: '- Sơn Tùng M-TP'
  },
  {
    image3: require('../img/khampha/24h.png'),
    id3: 5,
    title3: '5 24H',
    singer3: '- LyLy'
  },
]

const data5 = [
  {
    image3: require('../img/khampha/haruharu.png'),
    id3: 1,
    title3: '1 Haru Haru',
    singer3: '- Big Bang'
  },
  {
    image3: require('../img/khampha/gentleman.png'),
    id3: 2,
    title3: '2 Gentleman',
    singer3: '- PSY'
  },
  {
    image3: require('../img/khampha/daybyday.png'),
    id3: 3,
    title3: '3 Day By Day',
    singer3: '- T-ara'
  },
  {
    image3: require('../img/khampha/face.png'),
    id3: 4,
    title3: '4 Face',
    singer3: '- NU`EST'
  },
  {
    image3: require('../img/khampha/lovescenario.png'),
    id3: 5,
    title3: '5 Love Scenario',
    singer3: '- iKON'
  },
]

const data6 = [
  {
    image3: require('../img/khampha/tungquen.png'),
    id3: 1,
    title3: '1 Từng quen',
    singer3: '- Wren Evans,Itsnk'
  },
  {
    image3: require('../img/khampha/hitmeup.png'),
    id3: 2,
    title3: '2 Hit Me Up',
    singer3: '- Binz'
  },
  {
    image3: require('../img/khampha/viemtatca.png'),
    id3: 3,
    title3: '3 Vì Em Tất Cả',
    singer3: '- Mỹ Tâm'
  },
  {
    image3: require('../img/khampha/codondaquabinhthuong.png'),
    id3: 4,
    title3: '4 Có Đơn Đã Quá Bình Thường',
    singer3: '- Miu Lê'
  },
  {
    image3: require('../img/khampha/emnay.png'),
    id3: 5,
    title3: '5 Em Này',
    singer3: '- Gin Tuấn Kiệt, PuKa'
  },
]

const data7 = [
  {
    image3: require('../img/khampha/bandoi.png'),
    id3: 1,
    title3: '1 Bạn Đời',
    singer3: '- Karik, GDucky'
  },
  {
    image3: require('../img/khampha/hitmeup.png'),
    id3: 2,
    title3: '2 Hit Me Up',
    singer3: '- Binz'
  },
  {
    image3: require('../img/khampha/mamia.png'),
    id3: 3,
    title3: '3 Mamma Mia',
    singer3: '- HIEUTHUHAI, HURRYKNG, MAN...'
  },
  {
    image3: require('../img/khampha/khiconmodanphai.png'),
    id3: 4,
    title3: '4 Khi Cơn Mơ Dần Phai',
    singer3: '- Tez, Myra Trần, RAP VIỆT'
  },
  {
    image3: require('../img/khampha/danhdoi.png'),
    id3: 5,
    title3: '5 Đánh Đổi',
    singer3: '- Obito, RPT MCK'
  },
]

const data8 = [
  {
    image3: require('../img/khampha/motnammoibinhan.png'),
    id3: 1,
    title3: '1 Một Năm Mới Bình An (Live)',
    singer3: '- Sơn Tùng M-TP'
  },
  {
    image3: require('../img/khampha/lamgiphaihot.png'),
    id3: 2,
    title3: '2 Làm Gì Phải Hốt',
    singer3: '- Đen, JustaTee, Hoàng Thùy Linh'
  },
  {
    image3: require('../img/khampha/tetnayconseve.png'),
    id3: 3,
    title3: '3 Tết Này Con Sẽ Về',
    singer3: '- Bùi Công Nam'
  },
  {
    image3: require('../img/khampha/tetdongday.png'),
    id3: 4,
    title3: '4 Tết Đóng Đầy',
    singer3: '- KHOA, Kay Trần, Duck V'
  },
  {
    image3: require('../img/khampha/nhuhoamuaxuan.png'),
    id3: 5,
    title3: '5 Như Hoa Mùa Xuân',
    singer3: '- Hồ Ngọc Hà, Thủy Tiên, Minh Hằng'
  },
]

const data9 = [
  {
    image3: require('../img/khampha/nhuanhdathayem.png'),
    id3: 1,
    title3: '1 Như Anh Đã Thấy Em (Ness ...',
    singer3: '- PhucXP'
  },
  {
    image3: require('../img/khampha/cuoicuoiremix.png'),
    id3: 2,
    title3: '2 Giờ Không Cưới Thì Nào Cướ...',
    singer3: '- Hồng Quân WyTy, NH4T Remix'
  },
  {
    image3: require('../img/khampha/emlaai.png'),
    id3: 3,
    title3: '3 Em Là Ai (Đại Mèo Remix) (S...',
    singer3: '- Keyo'
  },
  {
    image3: require('../img/khampha/gapdoiyeuthuong.png'),
    id3: 4,
    title3: '4 Gặp Đôi Yêu Thương (Ebe Re...)',
    singer3: '- Ebe (Việt Nam)'
  },
  {
    image3: require('../img/khampha/thuonglybiet.png'),
    id3: 5,
    title3: '5 Thương Lý Biệt Remix',
    singer3: '- Chu Thúy Quỳnh'
  },
]

const ngheganday = [
  {
    image: require('../img/khampha/buongdoitaynhaura.png'),
    id: 1,
    title: 'Buông Đôi Tay Nhau Ra',
    singer: 'Sơn Tùng M-TP.'
  },
  {
    image: require('../img/khampha/24h.png'),
    id: 2,
    title: '24H',
    singer: 'LyLy.'
  },
  {
    image: require('../img/khampha/haruharu.png'),
    id: 3,
    title: 'Haru Haru',
    singer: 'Big Bang.'
  },
  {
    image: require('../img/khampha/gentleman.png'),
    id: 4,
    title: 'Gentleman',
    singer: 'PSY.'
  },
  {
    image: require('../img/khampha/motnammoibinhan.png'),
    id: 5,
    title: 'Một Năm Mới Bình An (Live)',
    singer: 'Sơn Tùng M-TP.'
  },
  {
    image: require('../img/khampha/vu.png'),
    id: 6,
    title: 'Daily Mix',
    singer: 'Vũ.'
  },
  {
    image: require('../img/khampha/noo.png'),
    id: 7,
    title: 'Noo Phước Thịnh Mix',
    singer: 'Noo Phước Thịnh.'
  },
  {
    image: require('../img/khampha/spider.png'),
    id: 8,
    title: 'R&B/Hip Hop/Rap Mix',
    singer: 'Doja Cat.'
  },
  {
    image: require('../img/khampha/chungtacuahientai.png'),
    id: 9,
    title: 'Chúng Ta Của Hiện Tại',
    singer: 'Sơn Tùng M-TP.'
  },
  {
    image: require('../img/khampha/tungquen.png'),
    id: 11,
    title: 'Âm Nhạc Thịnh Hành',
    singer: 'Wren Evans.'
  },
  {
    image: require('../img/khampha/khamphamoi.png'),
    id: 12,
    title: 'Khám Phá Mới Mix',
    singer: 'CM1X.'
  },
  {
    image: require('../img/khampha/dailymix.png'),
    id: 13,
    title: 'Daily Mix',
    singer: 'Văn Mai Hương.'
  },
  {
    image: require('../img/khampha/trungquanidol.png'),
    id: 14,
    title: 'Trung Quân Idol Mix',
    singer: 'Trung Quân Idol.'
  },
]

const vutrunhacviet = [
  {
    image: require('../img/khampha/vpopthinhhanh.png'),
    id: 1,
    title: 'V-Pop Thịnh Hành',
    singer: 'Itsnk, The Masked Sin...'
  },
  {
    image: require('../img/khampha/nhacmoitrienvong.png'),
    id: 2,
    title: 'Nhạc Mới Triển Vọng',
    singer: 'Lou Hoàng, VSTRA, O...'
  },
  {
    image: require('../img/khampha/hiphopviet.png'),
    id: 3,
    title: 'Hip-Hop Việt',
    singer: 'HIEUTHUHAI, RPT MC...'
  },
  {
    image: require('../img/khampha/nunghesi.png'),
    id: 4,
    title: 'Nữ Nghệ Sĩ Việt',
    singer: 'Bảo Anh, Phương Ly, Vă...'
  },
  {
    image: require('../img/khampha/thenewvietnam.png'),
    id: 5,
    title: 'The New Vietnam',
    singer: 'tlinh, 2pillz, Wren Evans,...'
  },
  {
    image: require('../img/khampha/genzgen.png'),
    id: 6,
    title: 'Gen Gì Gen Z',
    singer: 'HIEUTHUHAI, VSTRA,...'
  },
  {
    image: require('../img/khampha/vsound2010s.png'),
    id: 7,
    title: 'V-SOUND 2010s',
    singer: 'Sơn Tùng M-TP, Binz, T...'
  },
  {
    image: require('../img/khampha/namnghesiviet.png'),
    id: 8,
    title: 'Nam Nghệ Sĩ Việt',
    singer: 'Trung Quân Idol, Lân Nh...'
  },
  {
    image: require('../img/khampha/hitvietquocdan.png'),
    id: 9,
    title: 'Hit Việt Quốc Dân',
    singer: 'Myra Trần, Tez, Mono,...'
  },
  {
    image: require('../img/khampha/tiemnangvpop.png'),
    id: 10,
    title: 'Tiềm Năng V-Pop',
    singer: 'Mỹ Anh, VSTRA, Obito'
  },
  {
    image: require('../img/khampha/nhactreremix.png'),
    id: 11,
    title: 'Nhạc Trẻ Remix',
    singer: 'Huyền Tâm Môn, Hòa...'
  },
]

const tamtranghomnay = [
  {
    image: require('../img/khampha/acousticviet.png'),
    id: 1,
    title: 'Acoustic Việt',
    singer: 'GDucky, Hoàng Dũng,...'
  },
  {
    image: require('../img/khampha/lacacaphe.png'),
    id: 2,
    title: 'La Cà Cà Phê',
    singer: 'tlinh, Phương Ly, GRE...'
  },
  {
    image: require('../img/khampha/nhacvietngaybuon.png'),
    id: 3,
    title: 'Nhạc Việt Ngày Buồn',
    singer: 'Bảo Uyên, Trung Quân,...'
  },
  {
    image: require('../img/khampha/lofiviet.png'),
    id: 4,
    title: 'Lofi Việt',
    singer: 'Wren Evans, Lập Ngu...'
  },
  {
    image: require('../img/khampha/bainhaclive.png'),
    id: 5,
    title: 'Bài Nhạc Live',
    singer: 'Hòa Minzy, Bùi Anh Tuấ...'
  },
  {
    image: require('../img/khampha/thoitiethomnaymua.png'),
    id: 6,
    title: 'Thời Tiết Hôm Nay Mưa',
    singer: 'Mr. Siro, Trung Quân,...'
  },
  {
    image: require('../img/khampha/nhacvietchill.png'),
    id: 7,
    title: 'Nhạc Việt Chill',
    singer: 'SOOBIN, Vũ, Tlinh,...'
  },
  {
    image: require('../img/khampha/camxuckhiyeu.png'),
    id: 8,
    title: 'Cảm Xúc Khi Yêu',
    singer: 'Anh Tú Atus, Only C, ...'
  },
  {
    image: require('../img/khampha/speedupviet.png'),
    id: 9,
    title: 'Speed Up Việt',
    singer: 'Ebe (Việt Nam), BMZ,...'
  },
  {
    image: require('../img/khampha/tiktokremixviet.png'),
    id: 10,
    title: 'TikTok Remix Việt',
    singer: 'Andree Right Hand, N...'
  },
  {
    image: require('../img/khampha/pianoviet.png'),
    id: 11,
    title: 'Piano Việt',
    singer: 'Nguyenn, Việt Anh, J...'
  },
]

const tiktoktopmix1 = [
  {
    image: require('../img/khampha/cuoicuoi.png'),
    id: 1,
    title: 'Giờ Không Cưới Thì Nào Cướ...',
    singer: 'Hồng Quân WyTy, Young P'
  },
  {
    image: require('../img/khampha/gapdoiyeuthuong.png'),
    id: 2,
    title: 'Gặp Đôi Yêu Thương (Ebe R...)',
    singer: 'Ebe (Việt Nam)'
  },
  {
    image: require('../img/khampha/shhhhh.png'),
    id: 3,
    title: 'shhhhhhh..',
    singer: 'WEAN, tlinh'
  },
]

const tiktoktopmix2 = [
  {
    image: require('../img/khampha/exitsign.png'),
    id: 1,
    title: 'Exit Sign',
    singer: 'HIEUTHUHAI'
  },
  {
    image: require('../img/khampha/tungquen.png'),
    id: 2,
    title: 'Từng quen',
    singer: 'Wren Evans, Itsnk'
  },
  {
    image: require('../img/khampha/t41104.png'),
    id: 3,
    title: 'id T41104 (feat. 267)',
    singer: 'W/n'
  },
]

const tiktoktopmix3 = [
  {
    image: require('../img/khampha/anhlangoailecuaem.png'),
    id: 1,
    title: 'Anh Là Ngoại Lệ Của Em',
    singer: 'Phương Ly'
  },
  {
    image: require('../img/khampha/hitmeup.png'),
    id: 2,
    title: 'Hit Me Up (Feat. Nomovodka)',
    singer: 'Binz'
  },
  {
    image: require('../img/khampha/perpectnight.png'),
    id: 3,
    title: 'Perfect Night',
    singer: 'LE SSERAFIM'
  },
]

const tiktoktopmix4 = [
  {
    image: require('../img/khampha/mamia.png'),
    id: 1,
    title: 'Mamma Mia',
    singer: 'HIEUTHUHAI, HURRYKNG, MA...'
  },
  {
    image: require('../img/khampha/nuna.png'),
    id: 2,
    title: 'Nuna',
    singer: 'Young Captain'
  },
  {
    image: require('../img/khampha/youme.png'),
    id: 3,
    title: 'You & Me',
    singer: 'JENNIE'
  },
]

const tiktoktopmix5 = [
  {
    image: require('../img/khampha/bodyshaming.png'),
    id: 1,
    title: 'Body Shaming',
    singer: 'CHOCO TRÚC PHƯƠNG'
  },
  {
    image: require('../img/khampha/bandoi.png'),
    id: 2,
    title: 'Bạn Đời',
    singer: 'Karik, GDucky'
  },
  {
    image: require('../img/khampha/tokyocypher.png'),
    id: 3,
    title: 'Tokyo Cypher',
    singer: 'Lil Wuyn, 16 BrT, 16 Typh'
  },
]

const chude = [
  {
    image1: require('../img/khampha/nhaycam.png'),
    image2: require('../img/khampha/mom.png'),
    id: 1,
  },
  {
    image1: require('../img/khampha/nhacthai.png'),
    image2: require('../img/khampha/lambai.png'),
    id: 2,
  },
  {
    image1: require('../img/khampha/nhenhang.png'),
    image2: require('../img/khampha/jazz.png'),
    id: 3,
  },
  {
    image1: require('../img/khampha/cuoituan.png'),
    image2: require('../img/khampha/quyettam.png'),
    id: 4,
  },
  {
    image1: require('../img/khampha/hyvong.png'),
    image2: require('../img/khampha/buoitrua.png'),
    id: 5,
  },
  {
    image1: require('../img/khampha/vuive.png'),
    image2: require('../img/khampha/dulich.png'),
    id: 6,
  },
  {
    image1: require('../img/khampha/tinhban.png'),
    image2: require('../img/khampha/santruong.png'),
    id: 7,
  },
  {
    image1: require('../img/khampha/phatgiao.png'),
    image2: require('../img/khampha/tonthuong.png'),
    id: 8,
  },
  {
    image1: require('../img/khampha/thattinh.png'),
    image2: require('../img/khampha/guitar.png'),
    id: 9,
  },
  {
    image1: require('../img/khampha/giadinh.png'),
    image2: require('../img/khampha/goicam.png'),
    id: 10,
  },
  {
    image1: require('../img/khampha/theducnhipdieu.png'),
    image2: require('../img/khampha/muaha.png'),
    id: 11,
  },
  {
    image1: require('../img/khampha/chaybo.png'),
    image2: require('../img/khampha/lofichill.png'),
    id: 12,
  },
  {
    image1: require('../img/khampha/anime.png'),
    image2: require('../img/khampha/hoathinh.png'),
    id: 13,
  },
]

const muagiangsinh = [
  {
    image: require('../img/khampha/christmassong.png'),
    id: 1,
    title: 'R&B Christmas Songs',
    singer: 'Mariah Carey, Eartha...'
  },
  {
    image: require('../img/khampha/christmasclassics.png'),
    id: 2,
    title: 'Christmas Classics',
    singer: 'Perry Como, The Font...'
  },
  {
    image: require('../img/khampha/giangsinhamap.png'),
    id: 3,
    title: 'Giáng Sinh Ấm Áp',
    singer: 'Christopher Phillips, B...'
  },
  {
    image: require('../img/khampha/christmasrelax.png'),
    id: 4,
    title: 'Christmas Relax',
    singer: 'Michael Forster, The P...'
  },
  {
    image: require('../img/khampha/acousticchristmas.png'),
    id: 5,
    title: 'Acoustic Christmas',
    singer: 'Birdy, She & Him, Fion...'
  },
  {
    image: require('../img/khampha/christmaspop.png'),
    id: 6,
    title: 'Christmas Pop',
    singer: 'Jennifer Hudson, Mari...'
  },
  {
    image: require('../img/khampha/giangsinhbestsong.png'),
    id: 7,
    title: 'Nhạc Giáng Sinh Hay Nhất',
    singer: 'Mariah Carey, Wham!,...'
  },
  {
    image: require('../img/khampha/merrychristmas.png'),
    id: 8,
    title: 'Merry Christmas!',
    singer: 'Fifth Harmony, Boney...'
  },
]

const ngaynhenhang = [
  {
    image: require('../img/khampha/midnightdrive.png'),
    id: 1,
    title: 'Midnight Drive',
    singer: 'HYBS, Carly Rae Jeps...'
  },
  {
    image: require('../img/khampha/acousticchill.png'),
    id: 2,
    title: 'Acoustic Chill',
    singer: 'SZA, Justin Bieber, No...'
  },
  {
    image: require('../img/khampha/popchill.png'),
    id: 3,
    title: 'Pop Chill',
    singer: 'Billie Eilish, Miley Cyru...'
  },
  {
    image: require('../img/khampha/thisishowfallinlove.png'),
    id: 4,
    title: 'This Is How I Fall In Love',
    singer: 'Johnny Stimson, Lauf...'
  },
  {
    image: require('../img/khampha/lofi&chill.png'),
    id: 5,
    title: 'Lofi & Chill',
    singer: 'Gab5, Fun Intended, L...'
  },
  {
    image: require('../img/khampha/tofeelsad.png'),
    id: 6,
    title: 'It\'s Ok To Feel Sad',
    singer: 'Lanna Del Rey, SYML, d...'
  },
  {
    image: require('../img/khampha/kpoponasunnyday.png'),
    id: 7,
    title: 'K-Pop On A Sunny Day',
    singer: 'PL, Younha, Chamsom'
  },
  {
    image: require('../img/khampha/pianochill.png'),
    id: 8,
    title: 'Piano Chill',
    singer: 'Peter Dickinson, Rasm...'
  },
  {
    image: require('../img/khampha/timelessclassics.png'),
    id: 9,
    title: 'Timeless Classics',
    singer: 'Frank Sinantra, Perry C...'
  },
  {
    image: require('../img/khampha/jazzforlovers.png'),
    id: 10,
    title: 'Jazz For Lovers',
    singer: 'Chet Baker, Duke Ellin...'
  },
]

const Item = ({ image1, image2, id }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image style={[styles.img1, { width: id == 1 ? 80 : 170, height: 80, borderRadius: 10, resizeMode: 'contain' }]} source={image1}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={[styles.img2, { width: id == 1 ? 80 : 170, height: 80, borderRadius: 10, resizeMode: 'contain', marginTop: 10 }]} source={image2}></Image>
      </TouchableOpacity>
    </View>
  )
}

const Itemchude = ({ image1, image2, id }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity>
        <Image style={{ width: 170, height: 80, borderRadius: 10, resizeMode: 'contain', marginLeft: 10 }} source={image1}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{ width: 170, height: 80, borderRadius: 10, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={image2}></Image>
      </TouchableOpacity>
    </View>
  )
}

const Item2 = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={[styles.img3, {}]} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const Item3 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img4} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>

  )
}

const Item4 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>

  )

}

const Item5 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Item6 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Item7 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Item8 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Item9 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Itemngheganday = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={styles.img3} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const Itemvutrunhacviet = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={styles.img3} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const Itemtamtranghomnay = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={styles.img3} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const Itemtiktoktopmix1 = ({ image, id, title, singer }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 80, height: 80, resizeMode: 'contain', marginLeft: 10, marginTop: 20, borderRadius: 5 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginTop: 35, marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Itemtiktoktopmix2 = ({ image, id, title, singer }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 80, height: 80, resizeMode: 'contain', marginLeft: 10, marginTop: 20, borderRadius: 5 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginTop: 35, marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Itemtiktoktopmix3 = ({ image, id, title, singer }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 80, height: 80, resizeMode: 'contain', marginLeft: 80, marginTop: 20, borderRadius: 5 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginTop: 35, marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Itemtiktoktopmix4 = ({ image, id, title, singer }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 80, height: 80, resizeMode: 'contain', marginLeft: 10, marginTop: 20, borderRadius: 5 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginTop: 35, marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Itemtiktoktopmix5 = ({ image, id, title, singer }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 80, height: 80, resizeMode: 'contain', marginLeft: 10, marginTop: 20, borderRadius: 5 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginTop: 35, marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Itemmuagiangsinh = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={styles.img3} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const Itemngaynhenhang = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={styles.img3} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const KhamPha = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.search} source={require('../img/khampha/search.png')}></Image>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <TextInput style={styles.textInput} placeholder="Bạn muốn nghe gì ?" placeholderTextColor='gray'></TextInput>
        </Pressable>
        <TouchableOpacity>
          <Image style={styles.mic} source={require('../img/khampha/mic.png')}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Slide data={images} />
          <ScrollView>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={({ item }) => (
                <Item image1={item.image1} image2={item.image2} id={item.id}></Item>
              )}
            />
          </ScrollView>
          <Text style={styles.txt}>Made for Trần Quốc Thịnh</Text>
          <ScrollView>
            <FlatList
              data={data2}
              horizontal={true}
              renderItem={({ item }) => (
                <Item2 image={item.image} id={item.id} title={item.title} singer={item.singer}></Item2>
              )}
            />
          </ScrollView>
          <View style={styles.rank}>
            <Text style={styles.txtXepHang}>Bảng Xếp Hạng</Text>
            <TouchableOpacity>
              <Text style={styles.txtThem}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>

              <View style={styles.trend}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Trending Music</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 80 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data3}
                  renderItem={({ item }) => (
                    <Item3 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item3>
                  )}
                >
                </FlatList>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>V-Pop</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 170 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data4}
                  renderItem={({ item }) => (
                    <Item4 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item4>
                  )}
                >
                </FlatList>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>K-Pop</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 170 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data5}
                  renderItem={({ item }) => (
                    <Item5 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item5>
                  )}
                />
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Youtube Trending</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 60 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data6}
                  renderItem={({ item }) => (
                    <Item6 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item6>
                  )}
                />
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Rap Viet</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 150 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data7}
                  renderItem={({ item }) => (
                    <Item7 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item7>
                  )}
                />
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Nhạc Tết</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 145 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data8}
                  renderItem={({ item }) => (
                    <Item8 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item8>
                  )}
                />
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Remix Việt</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 130 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data9}
                  renderItem={({ item }) => (
                    <Item9 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item9>
                  )}
                />
              </View>
            </View>

          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Nghe Gần Đây</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gray', fontSize: 15, marginTop: 25, marginLeft: 190, }}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={ngheganday}
              horizontal={true}
              renderItem={({ item }) => (
                <Itemngheganday image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemngheganday>
              )}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Vũ Trụ Nhạc Việt</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gray', fontSize: 15, marginTop: 25, marginLeft: 170, }}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={vutrunhacviet}
              horizontal={true}
              renderItem={({ item }) => (
                <Itemvutrunhacviet image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemvutrunhacviet>
              )}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Tâm Trạng Hôm Nay</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gray', fontSize: 15, marginTop: 25, marginLeft: 140, }}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={tamtranghomnay}
              horizontal={true}
              renderItem={({ item }) => (
                <Itemtamtranghomnay image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemtamtranghomnay>
              )}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>TikTok Top Mix</Text>
            <TouchableOpacity>
              <Image style={{ width: 50, height: 50, resizeMode: 'contain', marginTop: 10, marginLeft: 180 }} source={require('../img/khampha/ngaunhien.png')}></Image>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={tiktoktopmix1}
              renderItem={({ item }) => (
                <Itemtiktoktopmix1 image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemtiktoktopmix1>
              )}
            />

            <FlatList
              data={tiktoktopmix2}
              renderItem={({ item }) => (
                <Itemtiktoktopmix2 image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemtiktoktopmix2>
              )}
            />

            <FlatList
              data={tiktoktopmix3}
              renderItem={({ item }) => (
                <Itemtiktoktopmix3 image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemtiktoktopmix3>
              )}
            />

            <FlatList
              data={tiktoktopmix4}
              renderItem={({ item }) => (
                <Itemtiktoktopmix4 image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemtiktoktopmix4>
              )}
            />

            <FlatList
              data={tiktoktopmix5}
              renderItem={({ item }) => (
                <Itemtiktoktopmix5 image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemtiktoktopmix5>
              )}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Chủ Đề</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gray', fontSize: 15, marginTop: 25, marginLeft: 260, }}>Thêm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <FlatList
              data={chude}
              horizontal={true}
              renderItem={({ item }) => (
                <Itemchude image1={item.image1} image2={item.image2} id={item.id}></Itemchude>
              )}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Mùa Giáng Sinh</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gray', fontSize: 15, marginTop: 25, marginLeft: 180, }}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={muagiangsinh}
              horizontal={true}
              renderItem={({ item }) => (
                <Itemmuagiangsinh image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemmuagiangsinh>
              )}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Ngày Nhẹ Nhàng</Text>
            <TouchableOpacity>
              <Text style={{ color: 'gray', fontSize: 15, marginTop: 25, marginLeft: 180, }}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={ngaynhenhang}
              horizontal={true}
              renderItem={({ item }) => (
                <Itemngaynhenhang image={item.image} id={item.id} title={item.title} singer={item.singer}></Itemngaynhenhang>
              )}
            />
          </ScrollView>

        </View>
      </ScrollView>
    </View>
  )
}
export default KhamPha

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    flexDirection: 'row',
  },
  body: {
    backgroundColor: 'white',
  },
  search: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 25,
    top: 10,
  },
  mic: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  textInput: {
    width: 320,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 35,
    marginLeft: 20,
    marginTop: 5,
  },
  item: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginTop: 20,
  },
  item2: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  img3:
  {
    width: 170,
    height: 170,
    borderRadius: 10,
    resizeMode: 'contain',
    marginTop: 10,
  },
  txtXepHang: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginTop: 20,
  },
  rank: {
    flexDirection: 'row',
  },
  txtThem: {
    color: 'gray',
    fontSize: 15,
    marginTop: 25,
    marginLeft: 180,
  },
  trend: {
    width: 310,
    height: 330,
    backgroundColor: '#f0ecec',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  item3: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  img4:
  {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  img5:
  {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 5,
  },
})