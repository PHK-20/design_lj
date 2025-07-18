import React from 'react';

export default function AboutPage() {
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
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>个人介绍</h1>
        <h2 style={{ fontSize: 40, fontWeight: 500, marginBottom: 12 }}>Hi，我是刘晶</h2>
        <div style={{ fontSize: 18, marginBottom: 24, maxWidth: 600 }}>
          01年生于湖南长沙，现居上海。热爱设计、体验、科技与生活。喜欢用设计和代码表达自我。
        </div>
        <div style={{ display: 'flex', gap: 48, marginBottom: 48 }}>
          {/* 我的关键词 */}
          <div>
            <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>我的关键词</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>设计</span>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>体验</span>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>前端</span>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>生活</span>
            </div>
          </div>
          {/* 关于我的一些小事 */}
          <div>
            <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>关于我的一些小事</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>猫派</span>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>咖啡控</span>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>喜欢摄影</span>
              <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block' }}>热爱旅行</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 