export const portfolioData = {
  profile: {
    name: "정선우",
    imageUrl: "/profile.png", // 없을 시 방패 아이콘 사용
    //tagline: "보안 전문가를 향한 여정",
    //subtitle: "실무 중심의 보안 역량과 문제 해결 능력을 갖춘 인재",
    introduction: [
      "",
    ],
    education: {
      university: "성신여자대학교",
      major: "융합보안공학과",
      status: "재학 중", // 또는 졸업년도
       // 선택사항
    },
    experience: [
      {
        title: "학부연구생",
        organization: "SSWU CSE Lab",
        period: "2025.05 - ",
        track: "AI security",
      }
    ],
    contact: {
      email: "erinsunw1@naver.com",
      github: "https://github.com/sunwwwo",
      //linkedin: "https://linkedin.com",
      blog: "https://wtdpp.tistory.com/"
    }
  },

  clubs: [
    {
      id: "club-mcpsec",
      name: "융합보안공학과 학술동아리 융보공",
      university: "성신여자대학교",
      role: "8기 부원",
      period: "2025.03 - ",
      description: "매주 보안 세미나를 통해 웹해킹, 시스템해킹, 암호학, 네트워크 등 다양한 보안 분야를 학습하고 있습니다.",
      activities: [
        "CTF 문제 출제",
        "보안 취약점 분석 실습",
        "동아리 내 지식 공유"
      ],
      achievements: [
        "웹 해킹 분야 CTF 문제 출제"
      ]
    }
  ],

  projects: [
    {
      id: "project-ctf-2025",
      title: "융합보안공학 8기 CTF 문제 출제",
      period: "2025.05 - 2025.06",
      status: "완료",
      thumbnail: "/projecttestimage.png",
      images: [
        "/gallerydefault.png",
        "/gallerydefault.png",
        "/gallerydefault.png"
      ],
      overview: "동아리 기술 세미나에서 학습한 지식을 바탕으로 직접 취약점을 설계하고, 다른 부원들이 출제한 다양한 분야의 문제를 해결하며 공격과 방어의 원리를 종합적으로 학습했습니다.",
      contribution: [
        "'Integer Overflow' 취약점을 응용한 시스템 해킹 문제 출제",
        "다른 팀원이 출제한 웹, 암호학 분야 문제 해결 및 Write-up 작성"
      ],
      techStack: ["Python"],
      links: {
        github: [
          { name: "CTF 문제 소스코드", url: "https://github.com/YYJ-SH/ctfd_final" },
        ],
        pdf: [
          { name: "출제 문제 Write-up 1", url: "/YBG_CTF1 writeup.pdf" },
          { name: "출제 문제 Write-up 2", url: "/YBG_CTF2 writeup.pdf" },
        ]
      }
    },
    {
      id: "project-web-security-study",
      title: "웹 보안 팀 스터디 프로젝트",
      period: "2025.03 - 2025.07",
      status: "완료",
      thumbnail: "/projecttestimage.png",
      images: [
        "/gallerydefault.png",
      "/gallerydefault.png",
      "/gallerydefault.png",
     "/gallerydefault.png"
      ],
      overview: "융보공 동아리 내 aws 스터디를 진행 중입니다.",
      contribution: [
        //"SQL Injection 취약점 분석 및 익스플로잇 실습 진행",
      ],
      techStack: ["AWS"],
      links: {
        github: [
          { name: "웹 보안 스터디 자료", url: "" 
           },
        ],
        docs: [
          { name: "", url: ""
           },
        ]
      }
    }
  ],
  
 learningActivities: [
     /*
    {
      id: "learn-fuzzing",
      title: "시스템 해킹 및 퍼징 (AFL)",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2025.05",
      instructor: "융보공 기획부",
      description: "AFL을 활용한 퍼징 기법을 배우고, Damn Vulnerable C Program의 다양한 메모리 취약점을 분석 및 탐지하는 실습을 진행했습니다.",
      materials: [
        { name: "세미나 자료", url: "/NINE.pdf" },
        { name: "실습 후기", url: "" }
      ]
    },
    {
      id: "learn-network",
      title: "네트워크 패킷 분석 (Wireshark)",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2025.06",
      instructor: "융보공 기획부",
      description: "Wireshark를 활용해 TCP 3-Way Handshake, ARP 등 주요 프로토콜의 동작 원리를 패킷 레벨에서 분석했습니다.",
      materials: [
        { name: "세미나 자료", url: "/wireshark.pdf" },
        { name: "패킷 분석 리포트", url: "" }
      ]
    }
      */
  ],

  
  awards: [
        {
      id: "conference",
      name: "한국정보기술학술단체총연합회장상, 「어텐션 패턴 분석 기반 프롬프트 인젝션 탐지 시스템」",
      organizer: "정선우, 김남령, 이일구",
      date: "2025. 11.",
      certificateImage: "/defaultimage.png"
    },
   {
      id: "conference2",
      name: "국가보안기술연구소장상, 「스마트 컨트랙트 비즈니스 로직 취약점 탐지를 위한 정적 분석 프레임워크」",
      organizer: "육은서, 김남령, 조효빈, 정선우, 이일구",
      date: "2025. 11.",
      certificateImage: "/defaultimage.png"
    },
        {
      id: "conference3",
      name: "2025 ACK 학부생논문경진대회 동상, 「워터마크 기반 프롬프트 인젝션 위협 분석」",
      organizer: "정선우, 김남령, 조효빈, 육은서, 이일구",
      date: "2025. 11.",
      certificateImage: "/defaultimage.png"
    }
  ],

certificates: [
   /*    {
      id: "cert-ctf-pizza",
      name: "제 2회 융보공 CTF 수료증",
      organizer: "융합보안공학과 학술동아리 융보공",
      date: "2025. 06.",
      certificateImage: "/defaultimage.png"
    }
    */
  ],




  externalActivities: [
    /*{
      id: "activity-secon-2025",
      name: "제23회 세계보안엑스포 (SECON & eGISEC)",
      role: "참가자 (Attendee)",
      date: "2025. 03. 21.",
      description: "국내외 주요 보안 기업들의 부스를 방문하여 최신 AI 보안, 클라우드 보안 기술 동향을 파악하고, 다양한 보안 솔루션의 동작 원리를 이해하는 기회를 가졌습니다.",
      activityImage: "/defaultimage.png"
    },

      */
  ],


  
  skills: {
    "언어": [
      { name: "Python", description: "" },
      { name: "C", description: "시스템 취약점 분석 및 구현" },
    ],
    "보안 도구": [
      { name: "AFL", description: "퍼징을 통한 취약점 자동 탐색" },
      { name: "Wireshark", description: "패킷 캡처 및 프로토콜 분석" },
      { name: "Burp Suite", description: "웹 취약점 분석" }
    ],
    "기타": [
      { name: "Git & GitHub", description: "버전 관리 및 협업" },
      { name: "Linux", description: "" }
    ]
  },
  
  blogPosts: [
 /*   {
      id: "post-1",
      title: "SQL Injection 취약점 심층 분석: Union-based 공격부터 Blind 기법까지",
      thumbnail: "/blogtestimage.png",
      description: "OWASP Top 10에 포함된 SQL Injection 취약점의 다양한 공격 기법과 실제 익스플로잇 사례를 분석합니다.",
      url: "",
      date: "2025. 05. 28.",
      tags: ["Web Security", "SQL Injection", "OWASP"]
    }
  ]
  */
};

