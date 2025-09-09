import { useState } from "react";
import Modal from "../../components/Modal";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>

            {isOpen && (
                <Modal
                    isOpen
                    onRequestClose={() => setIsOpen(false)}
                    bodyOpenClassName="modal-custom-body"
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={false}
                >
                    <h2>Register</h2>
                    <form action="">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </Modal>
            )}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                deleniti veritatis dignissimos voluptate quam repudiandae error
                velit tempore ratione consequatur debitis! Voluptatum cupiditate
                nemo velit ipsum quibusdam exercitationem asperiores nostrum!
            </p>
        </div>
    );
}

export default Home;
