# Mock Data - Dữ liệu giả lập

## Tổng quan

Thư mục này chứa dữ liệu giả lập (mock data) cho ứng dụng.

## File songsData.ts

File này chứa dữ liệu bài hát giả lập cho ứng dụng music player:

### Danh sách bài hát
- **8 bài hát Việt Nam** với thông tin đầy đủ:
  - Tên bài hát và nghệ sĩ
  - Thời lượng và số lượt phát
  - URL âm thanh và hình ảnh
  - Lời bài hát đầy đủ
  - Màu gradient cho giao diện

### Cấu trúc dữ liệu

```typescript
interface Song {
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
```

## Tùy chỉnh

Để thêm bài hát mới, cập nhật file `songsData.ts`:

```typescript
{
  id: '9',
  title: 'Tên bài hát',
  artist: 'Tên nghệ sĩ',
  duration: '3:45',
  url: 'https://example.com/song.mp3',
  color: ['#8B5CF6', '#3B82F6'],
  plays: '1,234,567',
  imageUrl: 'https://example.com/image.jpg',
  lyrics: ['Dòng 1', 'Dòng 2', '...']
}
```
