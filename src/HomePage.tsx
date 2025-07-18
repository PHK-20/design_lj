import React from 'react';

function HomePage() {
  return (
    <>
      {/* 首页内容（原有部分） */}
      <div
        style={{
          background: "url('/bg.jpg') center calc(-20px) / cover no-repeat",
          minHeight: '100vh',
          padding: 0,
          margin: 0
        }}
      >
        {/* 欢迎语 */}
        <div style={{ paddingTop: 80, paddingLeft: 40 }}>
          <h1 style={{
            fontSize: 60,
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#fff',
            fontFamily: 'MyFont'
          }}>
            欢迎来到<br />小晶的专属空间
          </h1>
          {/* 四个主区块 */}
          <div style={{ display: 'flex', gap: 24, marginTop: 48 }}>
            {/* About me */}
            <div
              style={{
                background: '#f5fffe',
                borderRadius: 25,
                width: 180,
                minHeight: 340,
                padding: '26px 16px 16px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer',
                opacity: 0.9
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 600, marginBottom: 8 }}>01</div>
              <div style={{ fontSize: 22, fontWeight: 600, margin: '6px 0 18px 0' }}>
                About me
              </div>
              <div style={{ fontSize: 15, color: '#333', marginBottom: 18 }}>
                我是刘晶，一个01年来自湖南的长沙妹子
              </div>
              <img
                src="/avatar1.jpg"
                alt="个人头像"
                style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 6 }}
              />
            </div>
            {/* My Experience */}
            <div
              style={{
                background: '#f5fffe',
                borderRadius: 25,
                width: 180,
                minHeight: 340,
                padding: '26px 16px 16px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer',
                opacity: 0.9
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 600, marginBottom: 8 }}>02</div>
              <div style={{ fontSize: 22, fontWeight: 600, margin: '6px 0 18px 0', whiteSpace: 'nowrap' }} translate="no">My Experience</div>
              <div style={{ fontSize: 15, color: '#333', marginBottom: 18 }}>关于我学历背景和相关实习经历</div>
              <img
                src="/avatar2.jpg"
                alt="实习经历"
                style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 6 }}
              />
            </div>
            {/* UX Portfolio */}
            <div
              style={{
                background: '#f5fffe',
                borderRadius: 25,
                width: 180,
                minHeight: 340,
                padding: '26px 16px 16px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer',
                opacity: 0.9
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 600, marginBottom: 8 }}>03</div>
              <div style={{ fontSize: 22, fontWeight: 600, margin: '6px 0 18px 0' }} translate="no">UX Portfolio</div>
              <div style={{ fontSize: 15, color: '#333', marginBottom: 18 }}>一份与求职相关的、经验丰富的项目整理</div>
              <img
                src="/avatar3.jpg"
                alt="项目作品集"
                style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 6 }}
              />
            </div>
            {/* Contact Me */}
            <div
              style={{
                background: '#f5fffe',
                borderRadius: 25,
                width: 180,
                minHeight: 340,
                padding: '26px 16px 16px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer',
                opacity: 0.9
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 600, marginBottom: 8 }}>04</div>
              <div style={{ fontSize: 22, fontWeight: 600, margin: '6px 0 18px 0' }} translate="no">Contact Me</div>
              <div style={{ fontSize: 15, color: '#333', marginBottom: 18 }}>扫码添加微信或查看更多联系方式</div>
              <img
                src="/avatar4.jpg"
                alt="联系我"
                style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 6 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 个人介绍区块 */}
      <div style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0' }}>
        <div style={{ paddingLeft: 40 }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>
            Hi，我是刘晶<br />
            一个不太能吃辣的fú南人
          </h2>
          <div style={{ fontSize: 18, marginBottom: 50, maxWidth: 600 }}>
            湖南科技大学艺术设计硕士在读（2026 届毕业生），有三段大厂用户体验设计实习经历；熟练掌握各类设计软件，对事物保有好奇心，上进努力，持续在设计领域精进......
          </div>
          <div style={{ display: 'flex', gap: 48, marginBottom: 50 }}>
            {/* 我的关键词 */}
            <div>
              <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>我的关键词</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 0, maxWidth: 600 }}>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>共情能力</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>B/C端经验</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>AI工具应用</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>i人中的e人</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>不断努力并前进</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>水象天蝎座</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 18px', display: 'inline-block', width: 'fit-content', marginBottom: 8 }}>intp</span>
              </div>
            </div>
            {/* 关于我的一些小事 */}
            <div>
              <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>关于我的一些小事</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block', width: 'fit-content' }}>🐱 有一只性格非常可爱的小猫！</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block', width: 'fit-content' }}>☯️ 喜欢研究命理、星座～</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '4px 12px', display: 'inline-block', width: 'fit-content' }}>🏞️ 喜欢去有山有水的地方～</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 我的经验区块 */}
      <div style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0' }}>
        <div style={{ paddingLeft: 40 }}>
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
      {/* 作品集区块 */}
      <div style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0' }}>
        <div style={{ paddingLeft: 40 }}>
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
    </>
  );
}

export default HomePage; 