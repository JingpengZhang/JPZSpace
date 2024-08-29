# 常用工具函数

## 倒计时

```ts
/**
 * 倒计时
 * @param time 时长
 * @param callback 倒计时结束回掉
 */
export const countDown = (time: number, callback: () => void) => {
  let rafId = 0;
  const currentTime = new Date().getTime();
  const targetTime = currentTime + time;

  const core = () => {
    rafId = requestAnimationFrame(core);
    console.log("rrr");

    if (new Date().getTime() >= targetTime) {
      // 取消倒计时
      cancelAnimationFrame(rafId);
      callback();
    }
  };

  core();
};
```

## 节流

```ts
/**
 * 截流
 */
export const throttle = (func: Function, time: number, immediate = false) => {
  if (immediate) {
    let prevTime = 0;
    return (...args: any) => {
      const nowTime = Date.now();
      if (nowTime - prevTime >= time) {
        func.apply(this, args);
        prevTime = nowTime;
      }
    };
  } else {
    let timer: number | null = null;
    return (...args: any) => {
      if (!timer) {
        func.apply(this, args);
        timer = window.setTimeout(() => {
          if (timer) clearInterval(timer);
          timer = null;
        }, time);
      }
    };
  }
};
```
