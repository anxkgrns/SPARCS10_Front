import recipt from '../assets/icons/recipt.svg';


const typeList = [
    "temperature", "bus", "tumbler", 'airconditioner', 'trashcan', 'greenIdea', 'recycle'
]


const guideJson = [
    {
        'type': 'bus',
        'title': '대중 교통 이용하기',
        'content' : '인증 방법을 알려드릴게요! 역 이름이 보이는 사진을 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : null,
            'tag' : '지하철 사진'
        }, {
            'photo' : null,
            'tag' : '기차역 사진'
        }],
    }, 
    {
        'type': 'tumbler',
        'title': '카페에서 텀블러 할인받고 영수증 인증하기',
        'content' : '인증 방법을 알려드릴게요! 텀블러를 들고 있는 사진을 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : recipt,
            'tag' : '텀블러 할인 영수증 사진'
        }],
    },
    {
        'type': 'temperature',
        'title': '실내 적정 온도 유지하기',
        'content' : '인증 방법을 알려드릴게요! 온도계가 보이는 사진을 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : null,
            'tag' : '온도계 사진'
        }],
    },
    {
        'type': 'airconditioner',
        'title': '에어컨 사용량 줄이기',
        'content' : '인증 방법을 알려드릴게요! 에어컨이 꺼진 사진을 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : null,
            'tag' : '에어컨 꺼진 사진'
        }],
    },
    {
        'type': 'trashcan',
        'title': 'AI 이우와 함께 가장 가까운 쓰레기통 위치 찾고 쓰레기 버리기',
        'content' : '인증 방법을 알려드릴게요! 분리수거한 쓰레기 사진을 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : null,
            'tag' : '분리수거 사진'
        }],
    },
    {
        'type': 'greenIdea',
        'title': 'AI 이우에게 오늘의 환경 상식 듣기',
        'content' : '인증 방법을 알려드릴게요! 친환경 생활 아이디어를 적은 메모를 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : null,
            'tag' : '메모 사진'
        }],
    },
    {
        'type': 'recycle',
        'title': 'AI 이우와 함께 쓰레기 분리수거하기',
        'content' : '인증 방법을 알려드릴게요! 재활용한 쓰레기 사진을 업로드해 주세요.',
        'guide_photo' : [{
            'photo' : null,
            'tag' : '재활용 사진'
        }],
    }
]

function getGuideJson(type) {
    var jsonValue = guideJson.filter((item) => item.type === type);
    return JSON.stringify(jsonValue);
}

export {typeList, getGuideJson};
