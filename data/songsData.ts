export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  url: string;
  color: string[];
  plays: string;
  lyrics: string[];
  imageUrl: string;
}

export const songsData: Song[] = [
  {
    id: '1',
    title: 'Giọt Lệ Tình',
    artist: 'Trí Hải',
    duration: '3:12',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    color: ['#8B5CF6', '#3B82F6'],
    plays: '2,543,123',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Giọt lệ tình rơi xuống má em',
      'Như những giọt sương mai',
      'Tình yêu ta đã phai nhạt',
      'Như chiếc lá vàng rơi',
      '',
      'Em ơi sao em nỡ quên',
      'Những ngày tháng bên nhau',
      'Giờ đây chỉ còn lại',
      'Những kỷ niệm buồn trong tim',
      '',
      'Giọt lệ tình, giọt lệ tình',
      'Rơi mãi trong đêm dài',
      'Tình yêu ta đã xa rồi',
      'Như giấc mơ không về'
    ]
  },
  {
    id: '2',
    title: 'Phải Đau Cuộc Đời',
    artist: 'Chu Bin',
    duration: '4:25',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    color: ['#EF4444', '#F97316'],
    plays: '1,876,432',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Phải đau cuộc đời mới thấy được',
      'Giá trị của những gì ta có',
      'Phải mất đi rồi mới biết',
      'Trân trọng từng khoảnh khắc',
      '',
      'Đời không như ta mong đợi',
      'Nhưng ta vẫn phải sống',
      'Dù có khó khăn thế nào',
      'Ta vẫn phải bước tiếp',
      '',
      'Phải đau cuộc đời',
      'Mới hiểu được tình yêu',
      'Phải khóc rồi mới cười',
      'Được thật tình'
    ]
  },
  {
    id: '3',
    title: 'Hãy Xem Là Giấc Mơ',
    artist: 'Quang Vinh',
    duration: '3:45',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    color: ['#10B981', '#06B6D4'],
    plays: '3,124,567',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Hãy xem là giấc mơ thôi',
      'Những gì đã qua rồi',
      'Đừng để nó làm ta đau',
      'Hãy quên đi và bước tiếp',
      '',
      'Cuộc đời còn nhiều điều đẹp',
      'Đang chờ đợi phía trước',
      'Hãy mở lòng đón nhận',
      'Những điều tốt đẹp mới',
      '',
      'Hãy xem là giấc mơ',
      'Rồi sẽ qua thôi',
      'Tương lai tươi sáng',
      'Đang chờ ta đến'
    ]
  },
  {
    id: '4',
    title: 'Người Ra Đi Vô Duyên',
    artist: 'Phạm Khánh Hưng',
    duration: '4:12',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    color: ['#F59E0B', '#EF4444'],
    plays: '987,654',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Người ra đi vô duyên',
      'Để lại em một mình',
      'Trong căn phòng lạnh lẽo',
      'Với bao nhiều kỷ niệm',
      '',
      'Tại sao anh nỡ bỏ em',
      'Khi em cần anh nhất',
      'Giờ đây em chỉ biết',
      'Khóc trong đêm dài',
      '',
      'Người ra đi vô duyên',
      'Không một lời từ biệt',
      'Để em mãi chờ đợi',
      'Một tình yêu đã mất'
    ]
  },
  {
    id: '5',
    title: 'Nơi Tình Yêu Bắt Đầu',
    artist: 'Bùi Anh Tuấn',
    duration: '4:18',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    color: ['#FF6B6B', '#4ECDC4'],
    plays: '4,567,890',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Nơi tình yêu bắt đầu',
      'Là nơi em và anh gặp nhau',
      'Dưới ánh đèn vàng',
      'Của một chiều thu lãng mạn',
      '',
      'Em cười thật tươi',
      'Như nắng mai sớm',
      'Anh biết ngay lúc đó',
      'Trái tim mình đã thuộc về em',
      '',
      'Nơi tình yêu bắt đầu',
      'Sẽ là nơi ta về',
      'Dù có đi đâu xa',
      'Tình yêu vẫn ở đây'
    ]
  },
  {
    id: '6',
    title: 'Mưa Trên Phố Huế',
    artist: 'Thanh Lam',
    duration: '5:02',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    color: ['#9B59B6', '#3498DB'],
    plays: '2,345,678',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Mưa trên phố Huế rơi',
      'Như nước mắt ai đó',
      'Ướt đẫm những con đường',
      'Và cả tâm hồn tôi',
      '',
      'Huế ơi thành phố cổ',
      'Với bao nhiều kỷ niệm',
      'Mỗi khi mưa về',
      'Lòng tôi lại nhớ về em',
      '',
      'Mưa trên phố Huế',
      'Mưa trong lòng tôi',
      'Nhớ em nhiều lắm',
      'Người yêu xa xôi'
    ]
  },
  {
    id: '7',
    title: 'Về Đây Nghe Em',
    artist: 'Hoàng Rob',
    duration: '3:33',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    color: ['#E74C3C', '#F39C12'],
    plays: '1,234,567',
    imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Về đây nghe em',
      'Kể những câu chuyện',
      'Về tình yêu đầu',
      'Ngọt ngào như mật',
      '',
      'Em ơi hãy về',
      'Bên anh đêm nay',
      'Để anh được nghe',
      'Giọng em ru hồn',
      '',
      'Về đây nghe em',
      'Hát những bài ca',
      'Về tương lai ta',
      'Tươi đẹp như hoa'
    ]
  },
  {
    id: '8',
    title: 'Đêm Nay Anh Cô Đơn',
    artist: 'Đan Trường',
    duration: '4:44',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    color: ['#2C3E50', '#34495E'],
    plays: '3,456,789',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    lyrics: [
      'Đêm nay anh cô đơn',
      'Ngồi một mình trong phòng',
      'Nhớ về những ngày xưa',
      'Khi em còn bên anh',
      '',
      'Giờ đây em đã xa',
      'Theo người tình mới',
      'Để lại anh nơi đây',
      'Với trái tim tan vỡ',
      '',
      'Đêm nay anh cô đơn',
      'Như chiếc lá rơi',
      'Không biết về đâu',
      'Trong đêm tối mịt mờ'
    ]
  }
];