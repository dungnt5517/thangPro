# Lịch Sử Prompt (Vibe Coding)

Dưới đây là danh sách tổng hợp các câu lệnh (Prompt) đã được sử dụng để xây dựng Landing Page **THANGPRO**:

1.  **Khởi tạo dự án & Vai trò:**
    > **ROLE:** Bạn là một Senior Frontend Developer & UI/UX Expert. Nhiệm vụ của bạn là code một Landing Page chuyển đổi cao (High-converting Sale Page) cho dịch vụ vệ sinh "THANGPRO".
    >
    > **TECH STACK (YÊU CẦU KỸ THUẬT):**
    > 1. Ngôn ngữ: HTML5, CSS3, Vanilla JavaScript (Code trong 1 file duy nhất index.html để dễ chạy thử).
    > 2. Styling: Sử dụng Tailwind CSS (thông qua CDN) để thiết kế giao diện hiện đại, mobile-first.
    > 3. Icons: Sử dụng FontAwesome (qua CDN).
    > 4. Fonts: Sử dụng Google Fonts (Inter hoặc Roboto).
    >
    > **YÊU CẦU GIAO DIỆN (UI GUIDELINES):**
    > 1. Màu sắc: Sử dụng màu chủ đạo từ JSON (Xanh dương đậm & Vàng cam).
    > 2. Sticky Header: Thanh menu phải dính ở trên cùng khi cuộn, có nút "Gọi Ngay" nổi bật.
    > 3. Floating CTA: Một nút gọi điện thoại tròn, rung nhẹ (animation pulse) ở góc dưới bên phải màn hình.
    > 4. Before/After Slider: Tại section social_proof, hãy code một component trượt ảnh: Người dùng kéo thanh trượt ở giữa để xem ảnh trước và sau khi vệ sinh.
    > 5. Responsive: Giao diện phải hiển thị hoàn hảo trên Mobile (ưu tiên số 1) và Desktop.
    >
    > **QUY TRÌNH XỬ LÝ DỮ LIỆU:**
    > Tôi sẽ cung cấp cho bạn một biến const landingPageData chứa toàn bộ nội dung dưới dạng JSON. Bạn phải:
    > 1. Phân tích cấu trúc JSON.
    > 2. Map (ánh xạ) từng Section trong JSON ra UI tương ứng.
    > 3. Sử dụng placeholder_src trong JSON để hiển thị ảnh demo (nếu src thật chưa có).
    >
    > **HÃY CHỜ TÔI GỬI DỮ LIỆU JSON Ở TIN NHẮN TIẾP THEO.**

2.  **Cung cấp dữ liệu:**
    > Đây là json data
    > ```json
    > { ... }
    > ```

3.  **Yêu cầu kiểm tra tài nguyên thiếu:**
    > Bạn hãy kiểm tra để xem chúng ta đang thiếu những tài nguyên như ảnh hoặc video nào và các file này nên đặt tên là gì và chúng ta nên đặt nó ở đâu? Nếu có thể bạn có thể tạo các tài nguyên mẫu được không

4.  **Rà soát lần cuối trước khi nâng cấp:**
    > Hãy rà soát lại xem còn thiếu tài nguyên ảnh hoặc video nào nữa để bổ sung cho trang hoàn chỉnh nhất có thể nhé

5.  **Yêu cầu nâng cấp UI/UX (Luxury Style):**
    > Bây giờ hãy suy nghĩ thất kĩ từng bước để nâng cấp sale page này với phong cách sang trọng và chuyên nghiệp hơn nhé, Sao cho khách hàng vào trang đã thấy sự chuyên nghiệp tuyệt đối.
    > Bổ sung thêm một vài file ảnh để sale page có năng lượng về Visual Style hơn nhé

6.  **Fix ảnh lỗi (Phần Quy trình):**
    > *(Kèm ảnh chụp màn hình)*
    > 2 phần này tôi chưa thấy có ảnh. Hãy bổ sung

7.  **Fix ảnh lỗi (Phần Quy trình - Lần 2):**
    > *(Kèm ảnh chụp màn hình)*
    > Apply the edits shown in the screenshot(s).

8.  **Fix ảnh lỗi (Phần Dịch vụ):**
    > *(Kèm ảnh chụp màn hình)*
    > Hãy cập nhật ảnh phần này để hiển thị bạn nhé

9.  **Thay thế link ảnh cụ thể bị lỗi:**
    > Các file ảnh này không tồn tại hãy thay file ảnh khác cho tôi nhé
    > https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop
    > và
    > https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=800&auto=format&fit=crop

10. **Hỗ trợ Deploy Vercel (Cấu hình):**
    > *(Kèm ảnh chụp màn hình Vercel)*
    > Tôi phải triển khai dự án này lên vercel. Vậy phần Framework Preset tôi phải chọn là gì ở trong danh sách. Hãy suy nghĩ kĩ từng bước để trả lời tôi

11. **Fix lỗi Build Vercel:**
    > Khi deploy đang lỗi sau
    > 19:20:13.335 Running build in Washington, D.C., USA (East) – iad1
    > ...
    > 19:20:27.582 error TS2688: Cannot find type definition file for 'node'.
    > ...

12. **Yêu cầu tổng hợp (Hiện tại):**
    > Tổng hợp tất cả các Prompt mà tôi đã input cho bạn vào 1 file có tên là vibeCoding.md và có đánh số thứ tự

13. **Thiết lập quy tắc tự động log prompt:**
    > Bây giờ mỗi khi tôi input prompt thì nhiệm vụ bạn hãy cập nhật vào file vibeCoding.md sau đó mới thực thi Prompt. Bạn hiểu ý tôi chứ và bắt đầu luôn từ Prompt này nhé