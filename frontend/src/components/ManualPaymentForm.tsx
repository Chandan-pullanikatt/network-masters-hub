import React from 'react';
import { Upload } from 'lucide-react';
import { Input } from './ui/input';

interface ManualPaymentFormProps {
    onFileChange: (file: File | null) => void;
    fileError?: string;
}

const ManualPaymentForm: React.FC<ManualPaymentFormProps> = ({ onFileChange, fileError }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileChange(e.target.files[0]);
        } else {
            onFileChange(null);
        }
    };

    return (
        <div className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Manual Payment Details</h3>

            <div className="grid gap-6 md:grid-cols-2">
                {/* QR Code Section */}
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted/50 p-6">
                    <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                        {/* Placeholder for QR Code */}
                        <div className="h-full w-full bg-neutral-200" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Scan QR to Pay</p>
                </div>

                {/* Bank Details Section */}
                <div className="space-y-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                        <h4 className="mb-2 font-medium text-foreground">Bank Transfer Details</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p><span className="font-semibold text-foreground">Bank:</span> Example Bank</p>
                            <p><span className="font-semibold text-foreground">Account Name:</span> Network Masters</p>
                            <p><span className="font-semibold text-foreground">Account No:</span> 1234567890</p>
                            <p><span className="font-semibold text-foreground">IFSC Code:</span> EXMP0001234</p>
                            <p><span className="font-semibold text-foreground">UPI ID:</span> pay@example</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="screenshot">
                            Upload Payment Screenshot
                        </label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="screenshot"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="cursor-pointer file:cursor-pointer file:text-foreground"
                            />
                        </div>
                        {fileError && <p className="text-sm text-destructive">{fileError}</p>}
                        <p className="text-xs text-muted-foreground">
                            Please upload a screenshot of your successful transaction. Max 5MB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManualPaymentForm;
