# 🎮 CHISAKI167 - MINECRAFT RESOURCE & PORTFOLIO HUB

[![Author](https://img.shields.io/badge/Author-CHISAKI167-blueviolet?style=for-the-badge&logo=github)](https://github.com/chisaki167)
[![Live Site](https://img.shields.io/badge/GitHub_Pages-Live_Preview-success?style=for-the-badge&logo=githubpages)](https://chisaki167.github.io)
[![Platform](https://img.shields.io/badge/Platform-Minecraft_%7C_Web-orange?style=for-the-badge&logo=minecraft)](https://github.com/chisaki167)

---

## 🇻🇳 TIẾNG VIỆT

### 1. Giới Thiệu Dự Án
Kho lưu trữ này (`chisaki167.github.io`) đóng vai trò là **Trang chủ cá nhân kết hợp kho lưu trữ tài nguyên Minecraft** của **CHISAKI167**. Trang web được triển khai trực tiếp qua GitHub Pages, đi kèm với các thư mục chia sẻ schematics, bản mod, resource pack và thế giới game.

---

### 2. Cấu Trúc Thư Mục & Phụ Thuộc Tệp

```mermaid
flowchart TD
    Web[index.html<br/>Trang Chủ Web] -->|Styling| CSS[style.css]
    Web -->|Animation Script| JS[animation.js]
    Web -->|Media Background| Video[background.mp4]
    Web -->|Avatar Profile| Img[ava.jpg]

    subgraph Minecraft_Resources [Kho Tài Nguyên Minecraft]
        MC[Thư mục lưu trữ] --> Lit[litematicas/<br/>Bản thiết kế xây dựng]
        MC --> Mod[mods/<br/>Bộ sưu tập Mod]
        MC --> Rsp[rsp/<br/>Resource Packs]
        MC --> Sav[saves/<br/>World Saves / Bản đồ]
    end