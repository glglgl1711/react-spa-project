import axios from "axios";
import React, { useState } from "react";

export default function InputFormPage () {
    // useState : 상태 관리 훅

    // name : 실제 값이 들어 있음 / setName : name 값을 변경하는 함수 / <string> : name type / ('') : 초기 값
    const [name , setName] = useState<string>('');
    const [id , setId] = useState<string>('');
    const [password , setPassword] = useState<string>('');

    // 위와 다르게 data 라는 상태 값에 모두 묶어서 관리
    const [data , setData] = useState<{tel : string , address : string , memo : string , date : string}>({
        tel : '' , address : '' , memo : '' , date : ''
    })

    // File BinaryData 를 저장하는 상태 값
    const [file , setFile] = useState<string | Blob>();
    const [image , setImage] = useState<Blob>();

    // 파일명을 저장하는 상태 값
    const [fileName , setFileName] = useState<string>('')
    // 이미지 미리보기 값을 저장하는 상태 값
    const [preview , setPreview] = useState<string>('')

    // 이름 변경 함수 / e.target.value : input element 의 입력되는 값
    function handleNameChange (e:React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    function handleIdChange (e:React.ChangeEvent<HTMLInputElement>) {
        setId(e.target.value);
    }
    function handlePasswordChange (e:React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    // data 안에 있는 값들을 element 의 name 값을 기준으로 입력된 값을 저장한다.
    function handleDataChange (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setData((prev) => ({ ...prev , [e.target.name] : e.target.value}))
    }

    // 파일 onChange 이벤트 핸들러 - 1 ( 파일명이 필요할 경우 )
    function handleFileChange (e:React.ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader();
        if(e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = () => {
            if (e.target.files && e.target.files[0] && typeof e.target.files[0].name === 'string') {
                setFile(file); // File 타입
                setFileName(e.target.files[0].name); // string 타입의 파일 이름명을 저장한다.
            }
        }
    }

    // 파일 onChange 이벤트 핸들러 - 2 ( 미리보기 이미지가 필요할 경우 )
    function handleImageChange (e:React.ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader();
        if(e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = () => {
            if(e.target.files && e.target.files[0] && typeof reader.result === 'string') {
                setImage(e.target.files[0]);
                setPreview(reader.result)
            }
        }
    }

    async function Save () {
        const formData = new FormData();
        formData.append('name' , name)
        formData.append('id' , id)
        formData.append('password' , password)
        formData.append('tel' , data?.tel)
        formData.append('address' , data.address)
        formData.append('memo' , data?.memo)
        formData.append('date' , data?.date)
        formData.append('file' , file as File || '')
        formData.append('image' , image as File || '')

        // 404 에러는 날 거지만 , netword 탭 -> payload 항목에서 내가 입력하고 전송하는 값들을 확인할 수 있다.
        const response = axios.post(`test` , formData);
        
    }
    return(
        <>
        <h2>입력 Form 페이지</h2>
        <div>
            <h3>입력 Form - 1</h3>
            이름 : <input type="text" value={name} onChange={handleNameChange} />
            아이디 : <input type="text" value={id} onChange={handleIdChange} />
            비밀번호 : <input type="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div>
            <h3>입력 Form - 2</h3>
            전화번호 : <input type="text" name="tel" value={data?.tel} onChange={handleDataChange} />
            주소 : <input type="text" name="address" value={data?.address} onChange={handleDataChange} />
            간단메모 : <textarea name="memo" value={data?.memo} onChange={handleDataChange} />
            날짜 : <input type="date" name="date" value={data?.date} onChange={handleDataChange} />
        </div>

        <div>
            <h3>입력 Form - 3</h3>
            파일 업로드 : <input type="file" onChange={handleFileChange} />
            이미지 업로드 : <input type="file" onChange={handleImageChange} />
        </div>
        <div>
            {fileName && `파일명 : ${fileName}`}
            {preview && <img src={preview} alt="image"/>}
        </div>
        <div>
            <button onClick={()=>Save()}>서버로 전송하기</button>
        </div>
        </>
    )
}