<div align="center">
<h1>L2B: Learning to Balance the Safety-Efficiency Trade-off in Interactive Crowd-aware Robot Navigation</h1>

<p align="center">
    <a href="https://denkiwakame.github.io">Mai Nishimura</a><sup>1</sup> &nbsp;
    <a href="https://yonetaniryo.github.io">Ryo Yonetani</a><sup>1</sup>
</p>

<p align="center">
    <sup>1</sup>OMRON SINIC X Corporation
</p>

<p align="center">
    <b>IROS 2020</b>
</p>

<p align="center">
    <a href="https://arxiv.org/abs/2003.09207"><img src="https://img.shields.io/badge/arXiv-2003.09207-orange" alt="arXiv"></a>
    <a href="https://omron-sinicx.github.io/l2b/"><img src="https://img.shields.io/badge/Project-Page-blue" alt="Project Page"></a>
    <a href="https://github.com/denkiwakame/Python-ERVO"><img src="https://img.shields.io/badge/Simulator-Python--ERVO-3B4252?logo=github" alt="Simulator"></a>
    <a href="https://www.youtube.com/watch?v=OB8KE9VXv3s"><img src="https://img.shields.io/badge/Video-YouTube-red?logo=youtube" alt="Video"></a>
</p>

</div>

---

## 📄 Abstract
This work presents a deep reinforcement learning framework for interactive navigation in a crowded place.
Our proposed approach, Learning to Balance (L2B) framework enables mobile robot agents to steer safely towards their destinations by avoiding collisions with a crowd, while actively clearing a path by asking nearby pedestrians to make room, if necessary, to keep their travel efficient.
We observe that the safety and efficiency requirements in crowd-aware navigation have a trade-off in the presence of social dilemmas between the agent and the crowd.
On the one hand, intervening in pedestrian paths too much to achieve instant efficiency will result in collapsing a natural crowd flow and may eventually put everyone, including the self, at risk of collisions.
On the other hand, keeping in silence to avoid every single collision will lead to the agent's inefficient travel.
With this observation, our L2B framework augments the reward function used in learning an interactive navigation policy to penalize frequent active path clearing and passive collision avoidance, which substantially improves the balance of the safety-efficiency trade-off.
We evaluate our L2B framework in a challenging crowd simulation and demonstrate its superiority, in terms of both navigation success and collision rate, over a state-of-the-art navigation approach.
