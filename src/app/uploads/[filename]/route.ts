import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: Request,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await context.params;
    
    // Sanitize filename to prevent directory traversal
    const safeFilename = filename.replace(/(\.\.[\/\\])+/g, '');
    
    const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads');
    const filePath = join(UPLOAD_DIR, safeFilename);

    if (!existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }

    const fileBuffer = readFileSync(filePath);
    
    // Determine content type
    let contentType = 'application/octet-stream';
    const lowerFilename = safeFilename.toLowerCase();
    
    if (lowerFilename.endsWith('.jpg') || lowerFilename.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    } else if (lowerFilename.endsWith('.png')) {
      contentType = 'image/png';
    } else if (lowerFilename.endsWith('.webp')) {
      contentType = 'image/webp';
    } else if (lowerFilename.endsWith('.svg')) {
      contentType = 'image/svg+xml';
    } else if (lowerFilename.endsWith('.gif')) {
      contentType = 'image/gif';
    } else if (lowerFilename.endsWith('.ico')) {
      contentType = 'image/x-icon';
    }

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        // Cache dynamically uploaded images aggressively 
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving upload:', error);
    return new NextResponse('Error reading file', { status: 500 });
  }
}
