import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const dataParam = searchParams.get('data');
  let region = '';
  let voterTurnout = '0';
  let avgAge = '0';
  let cityType = '';

  if (dataParam) {
    try {
      const decoded = JSON.parse(Buffer.from(dataParam, 'base64').toString('utf-8'));
      region = decoded.r || '';
      voterTurnout = String(decoded.t || '0');
      avgAge = String(decoded.a || '0');
      cityType = decoded.m || '';
    } catch {
      // Decode failure - use defaults
    }
  } else {
    region = searchParams.get('region') || '';
    voterTurnout = searchParams.get('turnout') || '0';
    avgAge = searchParams.get('age') || '0';
    cityType = searchParams.get('type') || '';
  }

  let fontData: ArrayBuffer;
  try {
    const fontBuffer = await readFile(
      join(process.cwd(), 'public/fonts/DotGothic16-Regular.ttf')
    );
    fontData = fontBuffer.buffer.slice(
      fontBuffer.byteOffset,
      fontBuffer.byteOffset + fontBuffer.byteLength
    ) as ArrayBuffer;
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008080',
            color: 'white',
            fontSize: 48,
          }}
        >
          城市政見
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  if (!region) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008080',
            fontFamily: 'DotGothic16',
            padding: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '1040px',
              backgroundColor: '#c0c0c0',
              borderTop: '3px solid #ffffff',
              borderLeft: '3px solid #ffffff',
              borderRight: '3px solid #404040',
              borderBottom: '3px solid #404040',
              boxShadow: '2px 2px 0px #000000',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 8px',
                backgroundImage: 'linear-gradient(90deg, #000080, #1084d0)',
                color: 'white',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 22, fontWeight: 'bold' }}>
                <span>■</span>
                <span>城市政見.exe</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {['_', '□', '×'].map((btn) => (
                  <div
                    key={btn}
                    style={{
                      width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      backgroundColor: '#c0c0c0', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff',
                      borderRight: '2px solid #404040', borderBottom: '2px solid #404040', fontSize: 16, color: '#000000',
                    }}
                  >
                    {btn}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '48px 40px', gap: '24px', alignItems: 'center' }}>
              <div style={{ fontSize: 64, fontWeight: 'bold', color: '#000000' }}>城市政見</div>
              <div style={{ fontSize: 28, color: '#404040' }}>AI帶你看，你的城市政治</div>
              <div
                style={{
                  display: 'flex', backgroundColor: '#d4d4d4', borderTop: '2px solid #808080', borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff', borderBottom: '2px solid #ffffff', padding: '16px 32px', marginTop: '8px',
                }}
              >
                <span style={{ fontSize: 32, fontWeight: 'bold', color: '#000080' }}>你的城市呢？</span>
              </div>
              <div style={{ fontSize: 20, color: '#606060', marginTop: '8px' }}>全台22縣市對應 / 完全免費 / 完全中立</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [{ name: 'DotGothic16', data: fontData, style: 'normal' as const, weight: 400 }],
      }
    );
  }

  const turnoutNum = parseFloat(voterTurnout);
  const ageNum = parseFloat(avgAge);
  const nationalTurnout = 71.86;
  const nationalAge = 56.2;

  const turnoutDiff = turnoutNum - nationalTurnout;
  const turnoutDiffStr = turnoutDiff >= 0 ? `+${turnoutDiff.toFixed(1)}` : turnoutDiff.toFixed(1);
  const ageDiff = ageNum - nationalAge;
  const ageDiffStr = ageDiff >= 0 ? `+${ageDiff.toFixed(1)}` : ageDiff.toFixed(1);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#008080',
          fontFamily: 'DotGothic16',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '1040px',
            backgroundColor: '#c0c0c0',
            borderTop: '3px solid #ffffff',
            borderLeft: '3px solid #ffffff',
            borderRight: '3px solid #404040',
            borderBottom: '3px solid #404040',
            boxShadow: '2px 2px 0px #000000',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 8px',
              backgroundImage: 'linear-gradient(90deg, #000080, #1084d0)',
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 22, fontWeight: 'bold' }}>
              <span>■</span>
              <span>城市政見.exe</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {['_', '□', '×'].map((btn) => (
                <div
                  key={btn}
                  style={{
                    width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#c0c0c0', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff',
                    borderRight: '2px solid #404040', borderBottom: '2px solid #404040', fontSize: 16, color: '#000000',
                  }}
                >
                  {btn}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '32px 40px', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: 42, fontWeight: 'bold', color: '#000000' }}>
              {region}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div style={{ fontSize: 22, color: '#404040' }}>投票率</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                  <span style={{ fontSize: 72, fontWeight: 'bold', color: '#000000' }}>{voterTurnout}</span>
                  <span style={{ fontSize: 32, color: '#000000' }}>%</span>
                </div>
                <div style={{
                  display: 'flex', fontSize: 18, color: '#606060',
                  backgroundColor: '#d4d4d4', borderTop: '1px solid #808080', borderLeft: '1px solid #808080',
                  borderRight: '1px solid #ffffff', borderBottom: '1px solid #ffffff', padding: '4px 12px',
                }}>
                  全國平均 {nationalTurnout}%（{turnoutDiffStr}%）
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div style={{ fontSize: 22, color: '#404040' }}>議員平均年齡</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                  <span style={{ fontSize: 72, fontWeight: 'bold', color: '#000000' }}>{avgAge}</span>
                  <span style={{ fontSize: 32, color: '#000000' }}>歲</span>
                </div>
                <div style={{
                  display: 'flex', fontSize: 18, color: '#606060',
                  backgroundColor: '#d4d4d4', borderTop: '1px solid #808080', borderLeft: '1px solid #808080',
                  borderRight: '1px solid #ffffff', borderBottom: '1px solid #ffffff', padding: '4px 12px',
                }}>
                  全國平均 {nationalAge}歲（{ageDiffStr}歲）
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex', justifyContent: 'center',
              backgroundColor: '#d4d4d4', borderTop: '2px solid #808080', borderLeft: '2px solid #808080',
              borderRight: '2px solid #ffffff', borderBottom: '2px solid #ffffff', padding: '12px 24px',
            }}>
              <span style={{ fontSize: 36, fontWeight: 'bold', color: '#000080' }}>
                &gt;&gt; {cityType} &lt;&lt;
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
              <div style={{ display: 'flex', fontSize: 24, color: '#000000' }}>
                你的城市呢？
              </div>
              <div style={{ display: 'flex', fontSize: 22, color: '#000080', fontWeight: 'bold' }}>
                #城市政見
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'DotGothic16',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
