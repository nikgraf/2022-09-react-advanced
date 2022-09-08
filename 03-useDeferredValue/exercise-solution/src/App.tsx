import { useDeferredValue, useState } from "react";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

// This is for example really happening in WhatsApp or Signal
// > Iteratively SHA-512 hash the sorted Identity Keys and user identifier 5200 times.
const VerificationCode: React.FC<{ userId: string; isStale: boolean }> = ({
  userId,
  isStale,
}) => {
  if (isStale) {
    return <div>Code: calculating …</div>;
  }

  let hash = naclUtil.decodeUTF8(userId);
  [...Array(520000)].forEach((_, i) => {
    hash = nacl.hash(hash);
  });

  return <div>Code: {naclUtil.encodeBase64(hash)}</div>;
};

// // Is it a better API to indicated that we are expecting a deferred value?
// const VerificationCode: React.FC<{
//   deferredUserId: string;
//   userId: string;
// }> = ({ userId, deferredUserId }) => {
//   console.log(userId, deferredUserId);
//   const isLoading = userId !== deferredUserId;
//   if (isLoading) {
//     return <div>Code: calculating …</div>;
//   }

//   let hash = naclUtil.decodeUTF8(userId);
//   [...Array(520000)].forEach((_, i) => {
//     hash = nacl.hash(hash);
//   });

//   return <div>Code: {naclUtil.encodeBase64(hash)}</div>;
// };

function App() {
  const [userId, setUserId] = useState("c8071923-cc08-4cd6-aeb2-d0b1ddf29863");
  const deferredUserId = useDeferredValue(userId);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setUserId("c8071923-cc08-4cd6-aeb2-d0b1ddf29863");
          }}
        >
          Jane
        </button>
        <button
          onClick={() => {
            setUserId("af9639e3-ae6e-45d6-856d-46f799718c72");
          }}
        >
          Anna
        </button>
      </div>
      <div>UserId: {userId}</div>
      <VerificationCode
        userId={deferredUserId}
        isStale={deferredUserId !== userId}
      />
    </>
  );
}

export default App;
