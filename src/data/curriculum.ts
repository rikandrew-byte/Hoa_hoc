import { Chapter, Element } from '../types';
import { CHAPTER_1_QUESTIONS, CHAPTER_2_QUESTIONS, CHAPTER_3_QUESTIONS, CHAPTER_4_QUESTIONS, CHAPTER_5_QUESTIONS, CHAPTER_6_QUESTIONS } from './questionBank';

export const CURRICULUM: Chapter[] = [
  {
    id: 'ch1',
    title: 'Chương 1: Chất - Nguyên tử - Phân tử',
    lessons: [
      { 
        id: 'l1.1', 
        title: 'Chất và Sự biến đổi chất', 
        content: 'Chất có ở khắp nơi. Chất có những tính chất vật lý và hóa học nhất định. Sự biến đổi chất chia làm hiện tượng vật lý và hiện tượng hóa học.',
        exercises: CHAPTER_1_QUESTIONS['l1.1']
      },
      { 
        id: 'l1.2', 
        title: 'Nguyên tử và Cấu tạo nguyên tử', 
        content: 'Nguyên tử là hạt cực kỳ nhỏ, trung hòa về điện. Cấu tạo gồm hạt nhân (proton, neutron) và vỏ nguyên tử (electron).',
        exercises: CHAPTER_1_QUESTIONS['l1.2']
      },
      { 
        id: 'l1.3', 
        title: 'Nguyên tố hóa học', 
        content: 'Tập hợp các nguyên tử cùng loại có cùng số proton. Kí hiệu hóa học biểu diễn nguyên tố và chỉ một nguyên tử của nguyên tố đó.',
        exercises: CHAPTER_1_QUESTIONS['l1.3']
      },
      { 
        id: 'l1.4', 
        title: 'Đơn chất, Hợp chất - Phân tử', 
        content: 'Đơn chất tạo nên từ 1 nguyên tố. Hợp chất tạo nên từ 2 nguyên tố trở lên. Phân tử là hạt đại diện cho chất.',
        exercises: CHAPTER_1_QUESTIONS['l1.4']
      },
      { 
        id: 'l1.5', 
        title: 'Công thức hóa học và Hóa trị', 
        content: 'Cách lập công thức hóa học dựa trên quy tắc hóa trị: tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia.',
        exercises: CHAPTER_1_QUESTIONS['l1.5']
      },
    ]
  },
  {
    id: 'ch2',
    title: 'Chương 2: Phản ứng hóa học',
    lessons: [
      { 
        id: 'l2.1', 
        title: 'Phản ứng hóa học là gì?', 
        content: 'Là quá trình biến đổi chất này thành chất khác. Liên kết giữa các nguyên tử thay đổi làm phân tử này biến đổi thành phân tử khác.',
        exercises: CHAPTER_2_QUESTIONS['l2.1']
      },
      { 
        id: 'l2.2', 
        title: 'Định luật bảo toàn khối lượng', 
        content: 'Trong một phản ứng hóa học, tổng khối lượng của các sản phẩm bằng tổng khối lượng của các chất tham gia.',
        exercises: CHAPTER_2_QUESTIONS['l2.2']
      },
      { 
        id: 'l2.3', 
        title: 'Phương trình hóa học', 
        content: 'Biểu diễn ngắn gọn phản ứng hóa học. Các bước lập: Viết sơ đồ, Cân bằng số nguyên tử mỗi nguyên tố, Viết phương trình.',
        exercises: CHAPTER_2_QUESTIONS['l2.3']
      },
    ]
  },
  {
    id: 'ch3',
    title: 'Chương 3: Mol và Tính toán hóa học',
    lessons: [
      { 
        id: 'l3.1', 
        title: 'Khái niệm về Mol', 
        content: 'Mol là lượng chất chứa 6,022 x 10^23 hạt vi hạt. Khối lượng mol (M) là khối lượng của 1 mol chất.',
        exercises: CHAPTER_3_QUESTIONS['l3.1']
      },
      { 
        id: 'l3.2', 
        title: 'Chuyển đổi khối lượng, thể tích và lượng chất', 
        content: 'Công thức: n = m/M; V = n * 22,4 (đktc). Đây là nền tảng cho mọi bài toán tính toán hóa học.',
        exercises: CHAPTER_3_QUESTIONS['l3.2']
      },
      { 
        id: 'l3.3', 
        title: 'Tỉ khối của chất khí', 
        content: 'So sánh độ nặng nhẹ giữa các chất khí: d(A/B) = M(A)/M(B). So với không khí: d(A/kk) = M(A)/29.',
        exercises: CHAPTER_3_QUESTIONS['l3.3'] // Updated correctly
      },
    ]
  },
  {
    id: 'ch4',
    title: 'Chương 4: Oxi - Không khí',
    lessons: [
      { 
        id: 'l4.1', 
        title: 'Tính chất của Oxi', 
        content: 'Oxi là phi kim hoạt động hóa học mạnh, đặc biệt ở nhiệt độ cao. Tác dụng với phi kim, kim loại và hợp chất.',
        exercises: CHAPTER_4_QUESTIONS['l4.1']
      },
      { id: 'l4.2', title: 'Sự oxi hóa và Phản ứng hóa hợp', content: 'Sự tác dụng của oxi với một chất là sự oxi hóa. Phản ứng hóa hợp tạo ra 1 chất duy nhất từ nhiều chất ban đầu.', exercises: CHAPTER_4_QUESTIONS['l4.1'] },
    ]
  },
  {
    id: 'ch5',
    title: 'Chương 5: Hiđro - Nước',
    lessons: [
      { id: 'l5.1', title: 'Tính chất của Hiđro', content: 'Khí nhẹ nhất, có tính khử. Tác dụng với oxi tạo nước (phản ứng nổ), tác dụng với một số oxi kim loại ở nhiệt độ cao.', exercises: CHAPTER_5_QUESTIONS['l5.1'] },
    ]
  },
  {
    id: 'ch6',
    title: 'Chương 6: Dung dịch',
    lessons: [
      { id: 'l6.1', title: 'Dung dịch và Độ tan', content: 'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan. Độ tan (S) là số gam chất tan trong 100g nước để tạo dung dịch bòa hòa.', exercises: CHAPTER_6_QUESTIONS['l6.1'] },
    ]
  }
];

export const PERIODIC_ELEMENTS: Element[] = [
  { symbol: 'H', name: 'Hiđro', atomicNumber: 1, atomicMass: 1, category: 'non-metal' },
  { symbol: 'He', name: 'Heli', atomicNumber: 2, atomicMass: 4, category: 'rare-gas' },
  { symbol: 'Li', name: 'Liti', atomicNumber: 3, atomicMass: 7, category: 'metal' },
  { symbol: 'Be', name: 'Beri', atomicNumber: 4, atomicMass: 9, category: 'metal' },
  { symbol: 'B', name: 'Bo', atomicNumber: 5, atomicMass: 11, category: 'non-metal' },
  { symbol: 'C', name: 'Cacbon', atomicNumber: 6, atomicMass: 12, category: 'non-metal' },
  { symbol: 'N', name: 'Nitơ', atomicNumber: 7, atomicMass: 14, category: 'non-metal' },
  { symbol: 'O', name: 'Oxi', atomicNumber: 8, atomicMass: 16, category: 'non-metal' },
  { symbol: 'F', name: 'Flo', atomicNumber: 9, atomicMass: 19, category: 'non-metal' },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicMass: 20, category: 'rare-gas' },
  { symbol: 'Na', name: 'Natri', atomicNumber: 11, atomicMass: 23, category: 'metal' },
  { symbol: 'Mg', name: 'Magie', atomicNumber: 12, atomicMass: 24, category: 'metal' },
  { symbol: 'Al', name: 'Nhôm', atomicNumber: 13, atomicMass: 27, category: 'metal' },
  { symbol: 'Si', name: 'Silic', atomicNumber: 14, atomicMass: 28, category: 'non-metal' },
  { symbol: 'P', name: 'Photpho', atomicNumber: 15, atomicMass: 31, category: 'non-metal' },
  { symbol: 'S', name: 'Lưu huỳnh', atomicNumber: 16, atomicMass: 32, category: 'non-metal' },
  { symbol: 'Cl', name: 'Clo', atomicNumber: 17, atomicMass: 35.5, category: 'non-metal' },
  { symbol: 'Ar', name: 'Agon', atomicNumber: 18, atomicMass: 39.9, category: 'rare-gas' },
  { symbol: 'K', name: 'Kali', atomicNumber: 19, atomicMass: 39, category: 'metal' },
  { symbol: 'Ca', name: 'Canxi', atomicNumber: 20, atomicMass: 40, category: 'metal' },
  { symbol: 'Fe', name: 'Sắt', atomicNumber: 26, atomicMass: 56, category: 'metal' },
  { symbol: 'Cu', name: 'Đồng', atomicNumber: 29, atomicMass: 64, category: 'metal' },
  { symbol: 'Zn', name: 'Kẽm', atomicNumber: 30, atomicMass: 65, category: 'metal' },
  { symbol: 'Ag', name: 'Bạc', atomicNumber: 47, atomicMass: 108, category: 'metal' },
  { symbol: 'Ba', name: 'Bari', atomicNumber: 56, atomicMass: 137, category: 'metal' },
  { symbol: 'Au', name: 'Vàng', atomicNumber: 79, atomicMass: 197, category: 'metal' },
  { symbol: 'Hg', name: 'Thủy ngân', atomicNumber: 80, atomicMass: 201, category: 'metal' },
  { symbol: 'Pb', name: 'Chì', atomicNumber: 82, atomicMass: 207, category: 'metal' },
];
