import React from 'react';

export default function ExperiencePage() {
  return (
    <div style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0' }}>
      <div style={{
        background: '#fff',
        borderRadius: 32,
        maxWidth: 1100,
        margin: '0 auto',
        padding: '40px 40px 60px 40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      }}>
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>我的经验</h1>
        <h2 style={{ fontSize: 28, fontWeight: 500, marginBottom: 24 }}>Education & Experience</h2>
        <div style={{ display: 'flex', gap: 64 }}>
          {/* 学历 */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>学历</div>
            <div style={{ fontSize: 16, marginBottom: 8 }}>2020-2024 华东师范大学 设计学类 本科</div>
            <div style={{ fontSize: 16, marginBottom: 8 }}>2017-2020 长沙市一中 高中</div>
          </div>
          {/* 实习经历 */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>实习经历</div>
            <div style={{ fontSize: 16, marginBottom: 8 }}>2023.7-2023.9 字节跳动 设计实习生</div>
            <div style={{ fontSize: 16, marginBottom: 8 }}>2022.7-2022.9 腾讯 设计实习生</div>
          </div>
        </div>
      </div>
    </div>
  );
} 