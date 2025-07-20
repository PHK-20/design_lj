import React, { useRef, useState } from 'react';

function HomePage() {
  const aboutRef = useRef(null);
  const [showPicEffect, setShowPicEffect] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);
  const [showHoverPicEffect, setShowHoverPicEffect] = useState(false);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      setShowPicEffect(false);
      setTimeout(() => setShowPicEffect(true), 400); // 延迟以配合滚动
    }
  };
  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
        <div style={{ paddingTop: 50, paddingLeft: 40 }}>
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
              onClick={scrollToAbout}
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
              onClick={scrollToExperience}
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
              onClick={scrollToPortfolio}
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
      <div ref={aboutRef} style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0' }}>
        <div style={{ paddingLeft: 40, marginTop: 70 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>
                Hi，我是刘晶<br />
                一个不太能吃辣的fú南人
              </h2>
              <div style={{ fontSize: 18, marginBottom: 50, maxWidth: 600 }}>
                湖南科技大学艺术设计硕士在读（2026 届毕业生），有三段大厂用户体验设计实习经历；熟练掌握各类设计软件，对事物保有好奇心，上进努力，持续在设计领域精进......
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: 80, position: 'relative', width: 290, height: 220 }}>
              <img
                src="/avatar6.jpg"
                alt="占位图"
                style={{
                  width: 260,
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 16,
                  position: 'absolute',
                  top: 0,
                  zIndex: 2,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                  transform: showPicEffect ? 'rotate(-15deg) translateX(0)' : 'rotate(0deg) translateX(0)',
                  left: showPicEffect ? 20 : 0
                }}
              />
              <img
                src="/avatar7.jpg"
                alt="占位图2"
                style={{
                  width: 260,
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 16,
                  position: 'absolute',
                  top: 0,
                  zIndex: 1,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                  transform: showPicEffect ? 'rotate(15deg) translateX(0)' : 'rotate(0deg) translateX(0)',
                  left: showPicEffect ? 230 : 0
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 48, marginBottom: 50, marginTop: 20 }}>
            {/* 我的关键词 */}
            <div>
              <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>我的关键词</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 0, maxWidth: 600 }}>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>共情能力</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>B/C端经验</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>AI工具应用</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>i人中的e人</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>不断努力并前进</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>水象天蝎座</span>
                <span style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 18px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', marginBottom: 8 }}>intp</span>
              </div>
            </div>
            {/* 关于我的一些小事 */}
            <div>
              <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>关于我的一些小事</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span
                  style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 37px 0 12px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)', position: 'relative' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    setHoveredTag(1);
                    setShowHoverPicEffect(false);
                    setTimeout(() => setShowHoverPicEffect(true), 60);
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    setHoveredTag(null);
                    setShowHoverPicEffect(false);
                  }}
                >🐱 有一只性格非常好且可爱的小猫！
                  {hoveredTag === 1 && (
                    <div style={{ position: 'absolute', top: -90, right: -90, width: 230, height: 160, zIndex: 10, transform: 'rotate(30deg) scale(0.9)', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}>
                      <img
                        src="/avatar8.jpg"
                        alt="占位图3"
                        style={{
                          width: 104,
                          height: 80,
                          objectFit: 'cover',
                          borderRadius: 12,
                          position: 'absolute',
                          top: 0,
                          zIndex: 2,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                          transform: showHoverPicEffect ? 'rotate(-15deg)' : 'rotate(0deg)',
                          left: showHoverPicEffect ? 10 : 0
                        }}
                      />
                      <img
                        src="/avatar9.jpg"
                        alt="占位图4"
                        style={{
                          width: 104,
                          height: 80,
                          objectFit: 'cover',
                          borderRadius: 12,
                          position: 'absolute',
                          top: 0,
                          zIndex: 1,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                          transform: showHoverPicEffect ? 'rotate(15deg)' : 'rotate(0deg)',
                          left: showHoverPicEffect ? 100 : 0
                        }}
                      />
                    </div>
                  )}
                </span>
                <span
                  style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 37px 0 12px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)', position: 'relative' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    setHoveredTag(2);
                    setShowHoverPicEffect(false);
                    setTimeout(() => setShowHoverPicEffect(true), 60);
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    setHoveredTag(null);
                    setShowHoverPicEffect(false);
                  }}
                >☯️ 喜欢研究命理、星座～
                  {hoveredTag === 2 && (
                    <div style={{ position: 'absolute', top: -120, right: -120, width: 290, height: 220, zIndex: 10, transform: 'rotate(30deg) scale(0.9)', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}>
                      <img
                        src="/placeholder3.jpg"
                        alt="占位图3"
                        style={{
                          width: 130,
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 12,
                          position: 'absolute',
                          top: 0,
                          zIndex: 2,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                          transform: showHoverPicEffect ? 'rotate(-15deg)' : 'rotate(0deg)',
                          left: showHoverPicEffect ? 10 : 0
                        }}
                      />
                      <img
                        src="/placeholder4.jpg"
                        alt="占位图4"
                        style={{
                          width: 130,
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 12,
                          position: 'absolute',
                          top: 0,
                          zIndex: 1,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                          transform: showHoverPicEffect ? 'rotate(15deg)' : 'rotate(0deg)',
                          left: showHoverPicEffect ? 120 : 0
                        }}
                      />
                    </div>
                  )}
                </span>
                <span
                  style={{ fontSize: 16, background: '#f5f5f5', borderRadius: 8, padding: '0 37px 0 12px', display: 'inline-flex', alignItems: 'center', height: 40, lineHeight: '40px', width: 'fit-content', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)', position: 'relative' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    setHoveredTag(3);
                    setShowHoverPicEffect(false);
                    setTimeout(() => setShowHoverPicEffect(true), 60);
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    setHoveredTag(null);
                    setShowHoverPicEffect(false);
                  }}
                >🏞️ 喜欢去有山有水的地方～
                  {hoveredTag === 3 && (
                    <div style={{ position: 'absolute', top: -120, right: -120, width: 290, height: 220, zIndex: 10, transform: 'rotate(30deg) scale(0.9)', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}>
                      <img
                        src="/avatar10.jpg"
                        alt="占位图3"
                        style={{
                          width: 130,
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 12,
                          position: 'absolute',
                          top: 0,
                          zIndex: 2,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                          transform: showHoverPicEffect ? 'rotate(-15deg)' : 'rotate(0deg)',
                          left: showHoverPicEffect ? 10 : 0
                        }}
                      />
                      <img
                        src="/avatar11.jpg"
                        alt="占位图4"
                        style={{
                          width: 130,
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 12,
                          position: 'absolute',
                          top: 0,
                          zIndex: 1,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), left 0.6s cubic-bezier(0.22,1,0.36,1)',
                          transform: showHoverPicEffect ? 'rotate(15deg)' : 'rotate(0deg)',
                          left: showHoverPicEffect ? 120 : 0
                        }}
                      />
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 我的经验区块 */}
      <div ref={experienceRef} style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0' }}>
        <div style={{ paddingLeft: 40, paddingRight: 40, maxWidth: 1400, margin: '0 auto', marginTop: -8 }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 22 }}>
            <span style={{ color: '#222' }}>My </span>
            <span style={{ color: '#2476ff' }}>Education & Experience</span>
          </h1>
          {/* 教育经历区块 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 26, display: 'flex', alignItems: 'flex-start', marginBottom: 0 }}>
            {/* 左侧内容 */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>教育经历</div>
              <div style={{ fontSize: 17, marginBottom: 8 }}>[本科] 湖南科技大学 — 产品设计专业 <span style={{ float: 'right', color: '#888', fontWeight: 400 }}>2019.09–2023.06</span></div>
              <div style={{ fontSize: 17, marginBottom: 8 }}>[硕士] 湖南科技大学 — 艺术设计专业 <span style={{ float: 'right', color: '#888', fontWeight: 400 }}>2023.09–2026.06</span></div>
              <div style={{ fontSize: 17, marginBottom: 8 }}>[荣誉] 湖南省大学生工业设计竞赛二等奖*2，湖南省研究生创新设计大赛二、三等奖，未来设计师·全国高校数字艺术设计大赛三等奖，实用新型专利2项，外观设计专利1项…</div>
            </div>
            {/* 右侧图片 */}
            <div style={{ width: 220, height: 173, marginLeft: 32, borderRadius: 16, background: 'repeating-linear-gradient(45deg,#eee 0 10px,#fff 10px 20px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/placeholder-edu.png" alt="教育经历图片" style={{ width: 120, height: 173, opacity: 0.5 }} />
            </div>
          </div>
          {/* 实习经历卡片区块 */}
          <div style={{ display: 'flex', gap: 32, marginTop: 18 }}>
            {/* 卡片1 */}
            <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 26, flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: 316 }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>实习经历-1</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ background: '#ffe066', color: '#222', fontWeight: 700, borderRadius: 6, padding: '2px 10px', fontSize: 15, marginRight: 8 }}>美团</span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>用户体验设计</span>
                <span style={{ color: '#888', fontSize: 15, marginLeft: 16 }}>2025.05–至今</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 8, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 80 }}>
                  <span style={{ background: '#FFF3C0', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>TO B</span>
                  <span style={{ background: '#FFF3C0', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>数据平台</span>
                  <span style={{ background: '#FFF3C0', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>体验优化</span>
                </div>
                <div style={{ width: 'auto', height: 181, borderRadius: 10, background: 'repeating-linear-gradient(45deg,#eee 0 10px,#fff 10px 20px)', marginLeft: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <img src="/placeholder-exp1.png" alt="实习1图片" style={{ height: 181, width: 'auto', opacity: 0.5 }} />
                </div>
              </div>
            </div>
            {/* 卡片2 */}
            <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 26, flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: 316 }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>实习经历-2</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ background: '#e3f0ff', color: '#2476ff', fontWeight: 700, borderRadius: 6, padding: '2px 10px', fontSize: 15, marginRight: 8 }}>抖音</span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>产品设计</span>
                <span style={{ color: '#888', fontSize: 15, marginLeft: 16 }}>2024.12–2025.05</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 8, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 80 }}>
                  <span style={{ background: '#e3f0ff', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>TO C</span>
                  <span style={{ background: '#e3f0ff', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>用户增长</span>
                  <span style={{ background: '#e3f0ff', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>设计探索</span>
                </div>
                <div style={{ width: 'auto', height: 181, borderRadius: 10, background: 'repeating-linear-gradient(45deg,#eee 0 10px,#fff 10px 20px)', marginLeft: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <img src="/placeholder-exp2.png" alt="实习2图片" style={{ height: 181, width: 'auto', opacity: 0.5 }} />
                </div>
              </div>
            </div>
            {/* 卡片3 */}
            <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 26, flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: 316 }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>实习经历-3</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ background: '#e3f0ff', color: '#2476ff', fontWeight: 700, borderRadius: 6, padding: '2px 10px', fontSize: 15, marginRight: 8 }}>百度</span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>产品设计</span>
                <span style={{ color: '#888', fontSize: 15, marginLeft: 16 }}>2024.04–2024.10</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 8, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 80 }}>
                  <span style={{ background: '#e3f0ff', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>TO E</span>
                  <span style={{ background: '#e3f0ff', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>办公平台</span>
                  <span style={{ background: '#e3f0ff', color: '#222222', borderRadius: 6, padding: '2px 12px', fontSize: 14, marginBottom: 0, width: 80, display: 'inline-block', textAlign: 'center', height: 47, lineHeight: '47px' }}>体验升级</span>
                </div>
                <div style={{ width: 'auto', height: 181, borderRadius: 10, background: 'repeating-linear-gradient(45deg,#eee 0 10px,#fff 10px 20px)', marginLeft: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <img src="/placeholder-exp3.png" alt="实习3图片" style={{ height: 181, width: 'auto', opacity: 0.5 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 作品集区块 */}
      <div ref={portfolioRef} style={{ minHeight: '100vh', background: "url('/avatar5.jpg') center center / cover no-repeat", padding: '40px 0 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'block', position: 'relative', zIndex: 2, width: '100%' }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32, marginLeft: 40 }}>
            <span style={{ color: '#222' }}>UX </span>
            <span style={{ color: '#2476ff' }}>Portfolio</span>
          </h1>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {/* 左侧图片占位 */}
            <div style={{ width: 360, height: 226, background: '#e0e0e0', borderRadius: 16, marginRight: 122, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg) translateY(-40px)' }}>
              <img src="/portfolio-placeholder.png" alt="作品图片占位" style={{ width: '90%', height: '100%', objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
            </div>
            {/* 中间白色卡片 */}
            <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 20, width: 400, height: 439, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0 }}>
              <div style={{ width: 360, height: 226, background: '#e0e0e0', borderRadius: 16, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/portfolio-placeholder.png" alt="作品图片占位" style={{ width: '90%', height: '100%', objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
              </div>
              <span style={{ background: '#e3f0ff', color: '#222', fontSize: 20, fontWeight: 500, borderRadius: 18, padding: '6px 28px', marginBottom: 18, display: 'inline-block' }}>抖音-功能优化</span>
              <div style={{ fontSize: 16, color: '#222', textAlign: 'left', width: '100%', lineHeight: 1.7 }}>
                这里为作品内容详细介绍这里为作品内容详细介绍这里为作品内容详细介绍这里为作品内容详细介绍这里为作品内容详细介绍这里为作品内容详细介绍
              </div>
            </div>
            {/* 右侧图片占位 */}
            <div style={{ width: 360, height: 226, background: '#e0e0e0', borderRadius: 16, marginLeft: 122, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(15deg) translateY(-40px)' }}>
              <img src="/portfolio-placeholder.png" alt="作品图片占位" style={{ width: '90%', height: '100%', objectFit: 'cover', borderRadius: 12, opacity: 0.7 }} />
            </div>
          </div>
          {/* 切换按钮 */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 78, marginTop: 52 }}>
              <button style={{ width: 48, height: 48, borderRadius: '50%', background: '#eee', border: 'none', fontSize: 28, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>&larr;</button>
              <button style={{ width: 48, height: 48, borderRadius: '50%', background: '#eee', border: 'none', fontSize: 28, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>&rarr;</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage; 