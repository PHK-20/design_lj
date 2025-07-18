import React from 'react';

export default function PortfolioPage() {
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
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>作品集</h1>
        <h2 style={{ fontSize: 28, fontWeight: 500, marginBottom: 24 }}>UX Portfolio</h2>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {/* 作品1 */}
          <div style={{ background: '#f5f5f5', borderRadius: 18, width: 320, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', marginBottom: 32 }}>
            <img src="/portfolio1.jpg" alt="作品1" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>智能家居App体验优化</div>
            <div style={{ fontSize: 15, color: '#666' }}>为智能家居App设计全新交互体验，提升用户满意度。</div>
          </div>
          {/* 作品2 */}
          <div style={{ background: '#f5f5f5', borderRadius: 18, width: 320, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', marginBottom: 32 }}>
            <img src="/portfolio2.jpg" alt="作品2" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>校园活动平台UI重构</div>
            <div style={{ fontSize: 15, color: '#666' }}>主导校园活动平台的UI重构，提升视觉一致性和易用性。</div>
          </div>
          {/* 作品3 */}
          <div style={{ background: '#f5f5f5', borderRadius: 18, width: 320, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', marginBottom: 32 }}>
            <img src="/portfolio3.jpg" alt="作品3" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>健康管理小程序设计</div>
            <div style={{ fontSize: 15, color: '#666' }}>设计健康管理小程序，关注用户健康数据可视化与交互。</div>
          </div>
        </div>
      </div>
    </div>
  );
} 