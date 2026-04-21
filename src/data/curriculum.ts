import { Chapter, Element } from '../types';
import { CHAPTER_1_QUESTIONS, CHAPTER_2_QUESTIONS, CHAPTER_3_QUESTIONS, CHAPTER_4_QUESTIONS, CHAPTER_5_QUESTIONS, CHAPTER_6_QUESTIONS, CHAPTER_7_QUESTIONS } from './questionBank';

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
      { 
        id: 'l2.4', 
        title: 'Tốc độ phản ứng và Chất xúc tác', 
        content: 'Tốc độ phản ứng là độ nhanh chậm của một phản ứng hóa học. Các yếu tố ảnh hưởng: nồng độ, nhiệt độ, diện tích tiếp xúc, áp suất và chất xúc tác.',
        exercises: CHAPTER_2_QUESTIONS['l2.4'],
        coreConcepts: [
          { id: 'cc1', title: 'Tốc độ phản ứng', content: 'Đại lượng chỉ mức độ nhanh chậm của phản ứng hóa học.' },
          { id: 'cc2', title: 'Chất xúc tác', content: 'Chất làm tăng tốc độ phản ứng nhưng không biến đổi sau khi kết thúc phản ứng.' },
          { id: 'cc3', title: 'Các yếu tố ảnh hưởng', content: 'Nhiệt độ (tăng T -> tăng tốc độ), Nồng độ (tăng C -> tăng tốc độ), Diện tích tiếp xúc (tăng diện tích -> tăng tốc độ).' }
        ]
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
      { id: 'l6.1', title: 'Dung dịch và Độ tan', content: 'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan. Độ tan (S) là số gam chất tan trong 100g nước để tạo dung dịch bão hòa.', exercises: CHAPTER_6_QUESTIONS['l6.1'] },
      { 
        id: 'l6.2', 
        title: 'Nồng độ Dung dịch', 
        content: 'Nồng độ cho biết lượng chất tan có trong một lượng dung dịch xác định. Hai loại phổ biến: Nồng độ phần trăm (C%) và Nồng độ mol (CM).',
        exercises: CHAPTER_6_QUESTIONS['l6.2'],
        coreConcepts: [
          { id: 'cc1', title: 'Nồng độ phần trăm (C%)', content: 'Số gam chất tan trong 100g dung dịch. C% = (m_ct / m_dd) * 100%.' },
          { id: 'cc2', title: 'Nồng độ mol (CM)', content: 'Số mol chất tan trong 1 lít dung dịch. CM = n / V.' },
          { id: 'cc3', title: 'Pha loãng dung dịch', content: 'Kỹ thuật thêm dung môi vào dung dịch đặc để được dung dịch có nồng độ thấp hơn mong muốn.' }
        ]
      },
    ]
  },
  {
    id: 'ch7',
    title: 'Chương 7: Một số hợp chất vô cơ thông dụng',
    lessons: [
      { 
        id: 'l7.1', 
        title: 'Oxide (Oxit)', 
        content: 'Hợp chất của oxi với một nguyên tố khác. Chia làm 2 loại chính: Oxide acid và Oxide base.',
        exercises: CHAPTER_7_QUESTIONS['l7.1']
      },
      { 
        id: 'l7.2', 
        title: 'Acid (Axit)', 
        content: 'Hợp chất mà phân tử gồm nguyên tử hiđro liên kết với gốc axit. Làm đổi màu quỳ tím thành đỏ.',
        exercises: CHAPTER_7_QUESTIONS['l7.2']
      },
      { 
        id: 'l7.3', 
        title: 'Base (Bazơ) và thang pH', 
        content: 'Hợp chất có nhóm -OH gắn với kim loại. Dung dịch base làm quỳ tím hóa xanh. Thang pH dùng để đo độ acid/base.',
        exercises: CHAPTER_7_QUESTIONS['l7.3']
      },
      { 
        id: 'l7.4', 
        title: 'Salt (Muối)', 
        content: 'Hợp chất gồm kim loại kết hợp với gốc axit. Phản ứng trung hòa giữa acid và base luôn tạo ra muối và nước.',
        exercises: CHAPTER_7_QUESTIONS['l7.4']
      },
      { 
        id: 'l7.5', 
        title: 'Phân bón hóa học', 
        content: 'Cung cấp các nguyên tố N, P, K cho cây trồng. Giúp tăng năng suất và cải thiện chất lượng nông sản.',
        exercises: CHAPTER_7_QUESTIONS['l7.5']
      },
    ]
  }
];

export const PERIODIC_ELEMENTS: Element[] = [
  // Row 1
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, atomicMass: 1.008, category: 'non-metal', row: 1, col: 1 },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, atomicMass: 4.0026, category: 'noble-gas', row: 1, col: 18 },
  // Row 2
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, atomicMass: 6.94, category: 'alkali', row: 2, col: 1 },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, atomicMass: 9.0122, category: 'alkaline-earth', row: 2, col: 2 },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, atomicMass: 10.81, category: 'metalloid', row: 2, col: 13 },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, atomicMass: 12.011, category: 'non-metal', row: 2, col: 14 },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, atomicMass: 14.007, category: 'non-metal', row: 2, col: 15 },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, atomicMass: 15.999, category: 'non-metal', row: 2, col: 16 },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, atomicMass: 18.998, category: 'halogen', row: 2, col: 17 },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicMass: 20.180, category: 'noble-gas', row: 2, col: 18 },
  // Row 3
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, atomicMass: 22.990, category: 'alkali', row: 3, col: 1 },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, atomicMass: 24.305, category: 'alkaline-earth', row: 3, col: 2 },
  { symbol: 'Al', name: 'Aluminium', atomicNumber: 13, atomicMass: 26.982, category: 'post-transition-metal', row: 3, col: 13 },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, atomicMass: 28.085, category: 'metalloid', row: 3, col: 14 },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, atomicMass: 30.974, category: 'non-metal', row: 3, col: 15 },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, atomicMass: 32.06, category: 'non-metal', row: 3, col: 16 },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, atomicMass: 35.45, category: 'halogen', row: 3, col: 17 },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, atomicMass: 39.948, category: 'noble-gas', row: 3, col: 18 },
  // Row 4
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, atomicMass: 39.098, category: 'alkali', row: 4, col: 1 },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, atomicMass: 40.078, category: 'alkaline-earth', row: 4, col: 2 },
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, atomicMass: 44.956, category: 'transition-metal', row: 4, col: 3 },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, atomicMass: 47.867, category: 'transition-metal', row: 4, col: 4 },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, atomicMass: 50.942, category: 'transition-metal', row: 4, col: 5 },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, atomicMass: 51.996, category: 'transition-metal', row: 4, col: 6 },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, atomicMass: 54.938, category: 'transition-metal', row: 4, col: 7 },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, atomicMass: 55.845, category: 'transition-metal', row: 4, col: 8 },
  { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, atomicMass: 58.933, category: 'transition-metal', row: 4, col: 9 },
  { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, atomicMass: 58.693, category: 'transition-metal', row: 4, col: 10 },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, atomicMass: 63.546, category: 'transition-metal', row: 4, col: 11 },
  { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, atomicMass: 65.38, category: 'transition-metal', row: 4, col: 12 },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, atomicMass: 69.723, category: 'post-transition-metal', row: 4, col: 13 },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, atomicMass: 72.63, category: 'metalloid', row: 4, col: 14 },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, atomicMass: 74.922, category: 'metalloid', row: 4, col: 15 },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, atomicMass: 78.971, category: 'non-metal', row: 4, col: 16 },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, atomicMass: 79.904, category: 'halogen', row: 4, col: 17 },
  { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, atomicMass: 83.798, category: 'noble-gas', row: 4, col: 18 },
  // Row 5
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, atomicMass: 85.468, category: 'alkali', row: 5, col: 1 },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, atomicMass: 87.62, category: 'alkaline-earth', row: 5, col: 2 },
  { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, atomicMass: 88.906, category: 'transition-metal', row: 5, col: 3 },
  { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, atomicMass: 91.224, category: 'transition-metal', row: 5, col: 4 },
  { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, atomicMass: 92.906, category: 'transition-metal', row: 5, col: 5 },
  { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, atomicMass: 95.95, category: 'transition-metal', row: 5, col: 6 },
  { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, atomicMass: 98, category: 'transition-metal', row: 5, col: 7 },
  { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, atomicMass: 101.07, category: 'transition-metal', row: 5, col: 8 },
  { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, atomicMass: 102.91, category: 'transition-metal', row: 5, col: 9 },
  { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, atomicMass: 106.42, category: 'transition-metal', row: 5, col: 10 },
  { symbol: 'Ag', name: 'Silver', atomicNumber: 47, atomicMass: 107.87, category: 'transition-metal', row: 5, col: 11 },
  { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, atomicMass: 112.41, category: 'transition-metal', row: 5, col: 12 },
  { symbol: 'In', name: 'Indium', atomicNumber: 49, atomicMass: 114.82, category: 'post-transition-metal', row: 5, col: 13 },
  { symbol: 'Sn', name: 'Tin', atomicNumber: 50, atomicMass: 118.71, category: 'post-transition-metal', row: 5, col: 14 },
  { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, atomicMass: 121.76, category: 'metalloid', row: 5, col: 15 },
  { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, atomicMass: 127.60, category: 'metalloid', row: 5, col: 16 },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, atomicMass: 126.90, category: 'halogen', row: 5, col: 17 },
  { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, atomicMass: 131.29, category: 'noble-gas', row: 5, col: 18 },
  // Row 6
  { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, atomicMass: 132.91, category: 'alkali', row: 6, col: 1 },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, atomicMass: 137.33, category: 'alkaline-earth', row: 6, col: 2 },
  { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, atomicMass: 178.49, category: 'transition-metal', row: 6, col: 4 },
  { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, atomicMass: 180.95, category: 'transition-metal', row: 6, col: 5 },
  { symbol: 'W', name: 'Tungsten', atomicNumber: 74, atomicMass: 183.84, category: 'transition-metal', row: 6, col: 6 },
  { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, atomicMass: 186.21, category: 'transition-metal', row: 6, col: 7 },
  { symbol: 'Os', name: 'Osmium', atomicNumber: 76, atomicMass: 190.23, category: 'transition-metal', row: 6, col: 8 },
  { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, atomicMass: 192.22, category: 'transition-metal', row: 6, col: 9 },
  { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, atomicMass: 195.08, category: 'transition-metal', row: 6, col: 10 },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, atomicMass: 196.97, category: 'transition-metal', row: 6, col: 11 },
  { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, atomicMass: 200.59, category: 'post-transition-metal', row: 6, col: 12 },
  { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, atomicMass: 204.38, category: 'post-transition-metal', row: 6, col: 13 },
  { symbol: 'Pb', name: 'Lead', atomicNumber: 82, atomicMass: 207.2, category: 'post-transition-metal', row: 6, col: 14 },
  { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, atomicMass: 208.98, category: 'post-transition-metal', row: 6, col: 15 },
  { symbol: 'Po', name: 'Polonium', atomicNumber: 84, atomicMass: 209, category: 'post-transition-metal', row: 6, col: 16 },
  { symbol: 'At', name: 'Astatine', atomicNumber: 85, atomicMass: 210, category: 'halogen', row: 6, col: 17 },
  { symbol: 'Rn', name: 'Radon', atomicNumber: 86, atomicMass: 222, category: 'noble-gas', row: 6, col: 18 },
  // Row 7
  { symbol: 'Fr', name: 'Francium', atomicNumber: 87, atomicMass: 223, category: 'alkali', row: 7, col: 1 },
  { symbol: 'Ra', name: 'Radium', atomicNumber: 88, atomicMass: 226, category: 'alkaline-earth', row: 7, col: 2 },
  { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, atomicMass: 267, category: 'transition-metal', row: 7, col: 4 },
  { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, atomicMass: 268, category: 'transition-metal', row: 7, col: 5 },
  { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, atomicMass: 269, category: 'transition-metal', row: 7, col: 6 },
  { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, atomicMass: 270, category: 'transition-metal', row: 7, col: 7 },
  { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, atomicMass: 269, category: 'transition-metal', row: 7, col: 8 },
  { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, atomicMass: 278, category: 'transition-metal', row: 7, col: 9 },
  { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, atomicMass: 281, category: 'transition-metal', row: 7, col: 10 },
  { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, atomicMass: 282, category: 'transition-metal', row: 7, col: 11 },
  { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, atomicMass: 285, category: 'transition-metal', row: 7, col: 12 },
  { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, atomicMass: 286, category: 'post-transition-metal', row: 7, col: 13 },
  { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, atomicMass: 289, category: 'post-transition-metal', row: 7, col: 14 },
  { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, atomicMass: 290, category: 'post-transition-metal', row: 7, col: 15 },
  { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, atomicMass: 293, category: 'post-transition-metal', row: 7, col: 16 },
  { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, atomicMass: 294, category: 'halogen', row: 7, col: 17 },
  { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, atomicMass: 294, category: 'noble-gas', row: 7, col: 18 },
  // Lanthanides (Row 8 visually)
  { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, atomicMass: 138.91, category: 'lanthanide', row: 8, col: 3 },
  { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, atomicMass: 140.12, category: 'lanthanide', row: 8, col: 4 },
  { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, atomicMass: 140.91, category: 'lanthanide', row: 8, col: 5 },
  { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, atomicMass: 144.24, category: 'lanthanide', row: 8, col: 6 },
  { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, atomicMass: 145, category: 'lanthanide', row: 8, col: 7 },
  { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, atomicMass: 150.36, category: 'lanthanide', row: 8, col: 8 },
  { symbol: 'Eu', name: 'Europium', atomicNumber: 63, atomicMass: 151.96, category: 'lanthanide', row: 8, col: 9 },
  { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, atomicMass: 157.25, category: 'lanthanide', row: 8, col: 10 },
  { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, atomicMass: 158.93, category: 'lanthanide', row: 8, col: 11 },
  { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, atomicMass: 162.50, category: 'lanthanide', row: 8, col: 12 },
  { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, atomicMass: 164.93, category: 'lanthanide', row: 8, col: 13 },
  { symbol: 'Er', name: 'Erbium', atomicNumber: 68, atomicMass: 167.26, category: 'lanthanide', row: 8, col: 14 },
  { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, atomicMass: 168.93, category: 'lanthanide', row: 8, col: 15 },
  { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, atomicMass: 173.05, category: 'lanthanide', row: 8, col: 16 },
  { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, atomicMass: 174.97, category: 'lanthanide', row: 8, col: 17 },
  // Actinides (Row 9 visually)
  { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, atomicMass: 227, category: 'actinide', row: 9, col: 3 },
  { symbol: 'Th', name: 'Thorium', atomicNumber: 90, atomicMass: 232.04, category: 'actinide', row: 9, col: 4 },
  { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, atomicMass: 231.04, category: 'actinide', row: 9, col: 5 },
  { symbol: 'U', name: 'Uranium', atomicNumber: 92, atomicMass: 238.03, category: 'actinide', row: 9, col: 6 },
  { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, atomicMass: 237, category: 'actinide', row: 9, col: 7 },
  { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, atomicMass: 244, category: 'actinide', row: 9, col: 8 },
  { symbol: 'Am', name: 'Americium', atomicNumber: 95, atomicMass: 243, category: 'actinide', row: 9, col: 9 },
  { symbol: 'Cm', name: 'Curium', atomicNumber: 96, atomicMass: 247, category: 'actinide', row: 9, col: 10 },
  { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, atomicMass: 247, category: 'actinide', row: 9, col: 11 },
  { symbol: 'Cf', name: 'Californium', atomicNumber: 98, atomicMass: 251, category: 'actinide', row: 9, col: 12 },
  { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, atomicMass: 252, category: 'actinide', row: 9, col: 13 },
  { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, atomicMass: 257, category: 'actinide', row: 9, col: 14 },
  { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, atomicMass: 258, category: 'actinide', row: 9, col: 15 },
  { symbol: 'No', name: 'Nobelium', atomicNumber: 102, atomicMass: 259, category: 'actinide', row: 9, col: 16 },
  { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, atomicMass: 262, category: 'actinide', row: 9, col: 17 },
];

