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
        exercises: CHAPTER_1_QUESTIONS['l1.1'],
        coreConcepts: [
          { id: 'cc1', title: 'Tính chất vật lý', content: 'Là tính chất có thể quan sát được mà không làm chất biến đổi thành chất khác: màu sắc, trạng thái, mùi, vị, điểm nóng chảy, điểm sôi.' },
          { id: 'cc2', title: 'Tính chất hóa học', content: 'Là khả năng chất biến đổi thành chất khác: tính cháy, tính oxi hóa, tính axit.' },
          { id: 'cc3', title: 'Hiện tượng vật lý', content: 'Sự biến đổi về trạng thái, kích thước nhưng không tạo chất mới: nóng chảy, bay hơi, đông đặc.' }
        ],
        labRequirements: [
          { id: 'lr1', title: 'Thí nghiệm tan chảy', description: 'Đun nóng để quan sát sự chuyển trạng thái của sáp parafin' },
          { id: 'lr2', title: 'Dụng cụ', description: 'Đèn cồn, cốc thủy tinh, kẹp sắt' }
        ]
      },
      { 
        id: 'l1.2', 
        title: 'Nguyên tử và Cấu tạo nguyên tử', 
        content: 'Nguyên tử là hạt cực kỳ nhỏ, trung hòa về điện. Cấu tạo gồm hạt nhân (proton, neutron) và vỏ nguyên tử (electron).',
        exercises: CHAPTER_1_QUESTIONS['l1.2'],
        coreConcepts: [
          { id: 'cc1', title: 'Cấu tạo nguyên tử', content: 'Proton (mang điện dương), Neutron (không mang điện) trong hạt nh��n; Electron (mang điện âm) chuyển động xung quanh.' },
          { id: 'cc2', title: 'Điện tích hạt nhân', content: 'Số proton = số electron = số hiệu nguyên tử, quyết định tính chất hóa học của nguyên tố.' },
          { id: 'cc3', title: 'Khối lượng nguyên tử', content: 'Khối lượng tập trung chủ yếu ở hạt nhân (proton + neutron).' }
        ],
        labRequirements: [
          { id: 'lr1', title: 'Mô hình nguyên tử', description: 'Sử dụng mô hình cầu để thể hiện cấu trúc' },
          { id: 'lr2', title: 'Sơ đồ', description: 'Vẽ sơ đồ cấu tạo nguyên tử H, He, C, O' }
        ]
      },
      { 
        id: 'l1.3', 
        title: 'Nguyên tố hóa học', 
        content: 'Tập hợp các nguyên tử cùng loại có cùng số proton. Kí hiệu hóa học biểu diễn nguyên tố và chỉ một nguyên tử của nguyên tố đó.',
        exercises: CHAPTER_1_QUESTIONS['l1.3'],
        coreConcepts: [
          { id: 'cc1', title: 'Nguyên tố hóa học', content: 'Tập hợp các nguyên tử cùng loại (cùng số proton).' },
          { id: 'cc2', title: 'Kí hiệu hóa học', content: 'Chữ cái đầu tiên viết hoa (latin), có thể thêm chữ cái thứ hai viết thường: Na (Natri), Ca (Canxi).' },
          { id: 'cc3', title: 'Nguyên tử khối', content: 'Khối lượng của 1 nguyên tử, đơn vị u (đvC).' }
        ],
        labRequirements: [
          { id: 'lr1', title: 'Bảng tuần hoàn', description: 'Tra cứu kí hiệu và nguyên tử khối của các nguyên tố' },
          { id: 'lr2', title: 'Tìm hiểu', description: 'Các nguyên tố phổ biến: H, O, C, N, Na, Fe, Ca, Cu' }
        ]
      },
      { 
        id: 'l1.4', 
        title: 'Đơn chất, Hợp chất - Phân tử', 
        content: 'Đơn chất tạo nên từ 1 nguyên tố. Hợp chất tạo nên từ 2 nguyên tố trở lên. Phân tử là hạt đại diện cho chất.',
        exercises: CHAPTER_1_QUESTIONS['l1.4'],
        coreConcepts: [
          { id: 'cc1', title: 'Đơn chất', content: 'Chất được tạo từ 1 nguyên tố: O₂ (oxi), N₂ (nitơ), Fe (sắt), Cu (đồng).' },
          { id: 'cc2', title: 'Hợp chất', content: 'Chất được tạo từ 2 nguyên tố trở lên: H₂O (nước), CO₂ (cacbon đioxit), NaCl (muối ăn).' },
          { id: 'cc3', title: 'Phân tử', content: 'Hạt gồm các nguyên tử liên kết với nhau, đại diện cho chất.' }
        ],
        labRequirements: [
          { id: 'lr1', title: 'Phân loại', description: 'Phân biệt đơn chất và hợp chất trong danh sách chất cho trước' },
          { id: 'lr2', title: 'Ví dụ', description: 'Liệt kê 3 đơn chất và 3 hợp chất quen thuộc' }
        ]
      },
      { 
        id: 'l1.5', 
        title: 'Công thức hóa học và Hóa trị', 
        content: 'Cách lập công thức hóa học dựa trên quy tắc hóa trị: tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia.',
        exercises: CHAPTER_1_QUESTIONS['l1.5'],
        coreConcepts: [
          { id: 'cc1', title: 'Công thức hóa học', content: 'Biểu diễn thành phần và tỉ lệ các nguyên tố trong hợp chất: H₂O có 2H và 1O.' },
          { id: 'cc2', title: 'Hóa trị', content: 'Khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Hóa trị của H là I, O là II.' },
          { id: 'cc3', title: 'Quy tắc hóa trị', content: 'Tích (chỉ số × hóa trị) = bên A = bên B = tích (chỉ số × hóa trị) bên kia.' }
        ],
        labRequirements: [
          { id: 'lr1', title: 'Lập công thức', description: 'Lập CTHH của hợp chất giữa Na (I) và Cl (I), Mg (II) và O (II)' },
          { id: 'lr2', title: 'Bảng hóa trị', description: 'Ghi nhớ hóa trị các nguyên tố thường gặp' }
        ]
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
      { id: 'l4.2', title: 'Sự oxi hóa và Phản ứng hóa hợp', content: 'Sự tác dụng của oxi với một chất là sự oxi hóa. Phản ứng hóa hợp tạo ra 1 chất duy nhất từ nhiều chất ban đầu.', exercises: CHAPTER_4_QUESTIONS['l4.2'] },
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
  { symbol: 'H', name: 'Hiđro', atomicNumber: 1, atomicMass: 1, category: 'non-metal', row: 1, col: 1 },
  { symbol: 'He', name: 'Heli', atomicNumber: 2, atomicMass: 4, category: 'rare-gas', row: 1, col: 18 },
  { symbol: 'Li', name: 'Liti', atomicNumber: 3, atomicMass: 7, category: 'metal', row: 2, col: 1 },
  { symbol: 'Be', name: 'Beri', atomicNumber: 4, atomicMass: 9, category: 'metal', row: 2, col: 2 },
  { symbol: 'B', name: 'Bo', atomicNumber: 5, atomicMass: 11, category: 'non-metal', row: 2, col: 13 },
  { symbol: 'C', name: 'Cacbon', atomicNumber: 6, atomicMass: 12, category: 'non-metal', row: 2, col: 14 },
  { symbol: 'N', name: 'Nitơ', atomicNumber: 7, atomicMass: 14, category: 'non-metal', row: 2, col: 15 },
  { symbol: 'O', name: 'Oxi', atomicNumber: 8, atomicMass: 16, category: 'non-metal', row: 2, col: 16 },
  { symbol: 'F', name: 'Flo', atomicNumber: 9, atomicMass: 19, category: 'non-metal', row: 2, col: 17 },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicMass: 20, category: 'rare-gas', row: 2, col: 18 },
  { symbol: 'Na', name: 'Natri', atomicNumber: 11, atomicMass: 23, category: 'metal', row: 3, col: 1 },
  { symbol: 'Mg', name: 'Magie', atomicNumber: 12, atomicMass: 24, category: 'metal', row: 3, col: 2 },
  { symbol: 'Al', name: 'Nhôm', atomicNumber: 13, atomicMass: 27, category: 'metal', row: 3, col: 13 },
  { symbol: 'Si', name: 'Silic', atomicNumber: 14, atomicMass: 28, category: 'non-metal', row: 3, col: 14 },
  { symbol: 'P', name: 'Photpho', atomicNumber: 15, atomicMass: 31, category: 'non-metal', row: 3, col: 15 },
  { symbol: 'S', name: 'Lưu huỳnh', atomicNumber: 16, atomicMass: 32, category: 'non-metal', row: 3, col: 16 },
  { symbol: 'Cl', name: 'Clo', atomicNumber: 17, atomicMass: 35.5, category: 'non-metal', row: 3, col: 17 },
  { symbol: 'Ar', name: 'Agon', atomicNumber: 18, atomicMass: 39.9, category: 'rare-gas', row: 3, col: 18 },
  { symbol: 'K', name: 'Kali', atomicNumber: 19, atomicMass: 39, category: 'metal', row: 4, col: 1 },
  { symbol: 'Ca', name: 'Canxi', atomicNumber: 20, atomicMass: 40, category: 'metal', row: 4, col: 2 },
  { symbol: 'Fe', name: 'Sắt', atomicNumber: 26, atomicMass: 56, category: 'metal', row: 4, col: 8 },
  { symbol: 'Cu', name: 'Đồng', atomicNumber: 29, atomicMass: 64, category: 'metal', row: 4, col: 11 },
  { symbol: 'Zn', name: 'Kẽm', atomicNumber: 30, atomicMass: 65, category: 'metal', row: 4, col: 12 },
  { symbol: 'Ag', name: 'Bạc', atomicNumber: 47, atomicMass: 108, category: 'metal', row: 5, col: 11 },
  { symbol: 'Ba', name: 'Bari', atomicNumber: 56, atomicMass: 137, category: 'metal', row: 6, col: 2 },
  { symbol: 'Au', name: 'Vàng', atomicNumber: 79, atomicMass: 197, category: 'metal', row: 6, col: 11 },
  { symbol: 'Hg', name: 'Thủy ngân', atomicNumber: 80, atomicMass: 201, category: 'metal', row: 6, col: 12 },
  { symbol: 'Pb', name: 'Chì', atomicNumber: 82, atomicMass: 207, category: 'metal', row: 6, col: 14 },
];
